import React,{ createContext, memo, useContext, useCallback, useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from 'react-native'
import { listofYearRange, showToastMsg } from "../../helper/helper";
import { useDispatch } from "react-redux";
import { hide, show } from "../../redux/reducers/spinner";

const Context = createContext()
export const SystemDateContextData = () => useContext(Context)

const SystemDateContext = ({ children }) => {
    const dispatch = useDispatch()
    const [systemDateTime, setSystemDateTime] = useState(null);
    const [_date, _setDate] = useState(null)
    const [listOfYear, setListofYear] = useState([])

    useLayoutEffect(() => {
        gettingDate()
    }, [])
    
    const gettingDate = useCallback(() => {
        dispatch(show())
        const requestOptions = {
            method: "GET",
          };
          
        return fetch("https://api.timezonedb.com/v2.1/get-time-zone?key=Q41ZJ8AW3KI5&format=json&by=zone&zone=Asia/Karachi", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                dispatch(hide())
                console.log({result})
                console.log(result.formatted)
                const d = new Date(result?.formatted || '2024-04-30 16:39:37');
                setSystemDateTime(d.getTime())
                _setDate(d)
                setListofYear(listofYearRange(d.getFullYear(), d.getFullYear() - 5, -1));
            })
            .catch((error) => {
                dispatch(hide())
                showToastMsg('error', error?.message || "Something went wrong")
            });
    }, [])
    return (
        <Context.Provider value={{systemDateTime, _date, listOfYear}}>
            {_date && children}
        </Context.Provider>
    )
}

export default memo(SystemDateContext)
