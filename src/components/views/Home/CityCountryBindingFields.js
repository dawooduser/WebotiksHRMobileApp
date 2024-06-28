import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { forwardRef, memo, useEffect, useImperativeHandle, useLayoutEffect, useState } from 'react'
import Geolocation from '@react-native-community/geolocation';
import { COLORS, FONTS, commonStyles } from '../../../constant/theme';
import { SimpleLineIcons } from '../../../constant/icon';
import HorizontalSpace from '../HorizontalSpace';
import { genericRatio, getCurrentLocationPermission, showToastMsg } from '../../../helper/helper';
import { hide } from '../../../redux/reducers/spinner';
import { useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

const CityCountryBindingFields = forwardRef(({ }, ref) => {
    const isFocused = useIsFocused();

    const dispatch = useDispatch();

    const [cityCountryBindingStates, setCityCountryBindingStates] = useState({
        location: '', lat: null, lng: null
    })
    useImperativeHandle(ref, () => ({
        passLat: cityCountryBindingStates.lat,
        passLng: cityCountryBindingStates.lng,
        location: cityCountryBindingStates.location,
    }), [cityCountryBindingStates])

    const getCurrentPosition = () => Geolocation.getCurrentPosition(
        (position) => getCurrentCityCountry(position.coords.latitude, position.coords.longitude),
        (error) => showToastMsg('info', 'GetCurrentPosition Error' + JSON.stringify(error)),
        { enableHighAccuracy: true }
    );
    const getCurrentCityCountry = (latitude, longitude) => {
        fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
        )
            .then(response => response.json())
            .then(data => {
                // Extract city and country information from the response
                console.log({ data })
                const city =
                    data.address.city ||
                    data.address.town ||
                    data.address.village ||
                    data.address.hamlet;
                const country = data.address.country;
                setCityCountryBindingStates({
                    ...cityCountryBindingStates,
                    location: `${city}, ${country}`,
                    lat: latitude, lng: longitude
                })
            })

            .catch(error => {
                // Handle errors
                console.error('Error:', error);
            });
    }
    useEffect(() => {
        if (isFocused && cityCountryBindingStates.location === "") {
            
            (async () => {
                console.log('yahoo')
                await getCurrentLocationPermission((response) => {
                    dispatch(hide())
                    if (response !== "granted") {
                        showToastMsg('error', 'error message while permission')
                        return
                    }
                    return getCurrentPosition()
                })
            })()
        }
    }, [isFocused])
    return (
        <View style={[commonStyles.rowDirection, commonStyles.center]}>
            <SimpleLineIcons name={'location-pin'} color={'#717171'} size={genericRatio(15)} />
            <HorizontalSpace width={5} />
            {cityCountryBindingStates.location === "" ? <ActivityIndicator size={'small'} color={COLORS.primary} /> :
                <Text style={[FONTS.body4, commonStyles.textFamily400, { color: '#717171' }]}>{cityCountryBindingStates?.location || ''}</Text>
            }
        </View>
    )
})

export default memo(CityCountryBindingFields)

const styles = StyleSheet.create({})