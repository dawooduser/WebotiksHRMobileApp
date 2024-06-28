import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hide, show } from '../../redux/reducers/spinner'
import axiosInstance from '../../http/config'
import { HttpToastMsg, showToastMsg } from '../../helper/helper'
import { LOGIN, MARK_ATTENDANCE } from '../../constant/httpsContants'


const useHttp = () => {
    const dispatch = useDispatch()
    const user = useSelector(x => x.user)

    function errorHttpHandler(error) {
        dispatch(hide())
        console.log('error', error);
        console.log('error', error?.response);
        console.log('error', error?.response?.data);
        console.log('error', error?.response?.status);
        console.log('error', error?.response?.headers);
        showToastMsg('error', 'Something went wrong')
    }

    const phoneLogin = (data = {}, cb) => {
        const headers = {}
        dispatch(show())
        axiosInstance.post(LOGIN, data, headers).then((response = null) => {
            dispatch(hide())
            HttpToastMsg(response?.data?.Message || 'success')
            cb(response)
        }).catch(errorHttpHandler)
    }

    const markAttendance = (data = {}, cb) => {
        const headers = {}
        dispatch(show())
        data['UserId'] = user?.userData?.UserId || ''
        data['Token'] = user?.token || ''
        axiosInstance.post(MARK_ATTENDANCE, data, headers).then((response = null) => {
            dispatch(hide())
            HttpToastMsg(response?.data?.Message || 'success')
            cb(response)
        }).catch(errorHttpHandler)
    }


    return {phoneLogin, markAttendance}
}

export default useHttp

const styles = StyleSheet.create({})