import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect, useMemo } from 'react'
import { COLORS, FONTS, commonStyles } from '../../../constant/theme'
import VerticalSpace from '../VerticalSpace'
import DatetitlePayment from './DatetitlePayment'
import { SystemDateContextData } from '../../../customHooks/hooks/useSystemStandardTime'
import { monthList, screenNavigation } from '../../../helper/helper'
import { useNavigation } from '@react-navigation/native'

const PaymentSchedual = () => {
    const navigation = useNavigation()
    const {systemDateTime, _date, listOfYear} = SystemDateContextData()
    useLayoutEffect(() => {
        const currentMonthIndex = _date.getMonth()

    }, [])
    // 
    const currentMonthIndex = useMemo(() => _date.getMonth(), [_date])
    
    const navigationHandler = screenName => screenNavigation(navigation, "PaySlip")
    return (
        <View style={[
            commonStyles.shadow,
            commonStyles.center, commonStyles.fullWidth, commonStyles.screenCommonPaddingHorizontal,]}>
            <View style={[styles.container, commonStyles.fullWidth]}>
                <View style={[commonStyles.fullWidth, commonStyles.rowDirection, commonStyles.spaceBetween, commonStyles.screenCommonPaddingHorizontal]}>
                    <Text style={[FONTS.body3, commonStyles.textFamily500, commonStyles.textColorBlack]}>{"Pay Slip"}</Text>
                    <TouchableOpacity onPress={navigationHandler}>
                    <Text style={[FONTS.body4, commonStyles.textFamily400, { color: '#004976' }]}>{"View"}</Text>
                    </TouchableOpacity>
                </View>
                <VerticalSpace />
                <View style={[commonStyles.center, commonStyles.rowDirection]}>
                    {currentMonthIndex === 0 ? <>
                        <DatetitlePayment title={'Next'} date={`${monthList[0] ?? '-'}/${listOfYear[1] ?? '-'}`} />
                    <View style={{height: '100%', width: 1, backgroundColor: COLORS.darkgray}} />
                    <DatetitlePayment title={'Last'} date={`${monthList[monthList.length - 1] ?? '-'}/${listOfYear[1] ?? '-'}`} />
                    </> 
                    : 
                    <>
                    <DatetitlePayment title={'Next'} date={`${monthList[currentMonthIndex - 2] ?? '-'}/${listOfYear[1] ?? '-'}`} />
                    <View style={{height: '100%', width: 1, backgroundColor: COLORS.darkgray}} />
                    <DatetitlePayment title={'Last'} date={`${monthList[currentMonthIndex - 1] ?? '-'}/${listOfYear[0] ?? '-'}`} />
                    </> 
                    }
                </View>
            </View>
        </View>
    )
}

export default PaymentSchedual

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'blue',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        paddingVertical: 10
        // padding: 10
    },
})