import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo, useEffect, useMemo, useRef, useState } from 'react'
import { COLORS, FONTS, commonStyles } from '../../../constant/theme'
import { SimpleLineIcons } from '../../../constant/icon'
import { convertTime12to24, genericRatio } from '../../../helper/helper'
import HorizontalSpace from '../HorizontalSpace'
import VerticalSpace from '../VerticalSpace'
import { rightBox } from '../../../constant/images'
import TimeBindingFields from './TimeBindingFields'
import CityCountryBindingFields from './CityCountryBindingFields'
import { useSelector } from 'react-redux'
import { useHttp } from '../../../customHooks'
import moment from "moment";
import DatetitlePayment from './DatetitlePayment'


const CheckInLocation = () => {
  const CityCountryRef = useRef()
  const data = useSelector(x => x.user)
  const { markAttendance } = useHttp()

  const OnCheckInhandler = () => {
    //ShiftId, Latitude, Longitude
    // DD-MMMM-YYYY HH:mm:ss
    let date = new Date();
    const ShiftId = data?.userData?.ShiftId || '';
    const Latitude = CityCountryRef.current.passLat;
    const Longitude = CityCountryRef.current.passLng;
    const DatePunch = moment(date).format("DD-MMMM-YYYY HH:mm:ss");
    markAttendance({ ShiftId, Latitude, Longitude, DatePunch }, (response) => {
      console.log(response)
    })
  }
  const timingShiftDisplay = useMemo(() => `Today Shift ${data?.userData?.ShiftStart || ''} to ${data?.userData?.ShiftEnd || ''}`, [data])
  const checkInOutBtnTitle = useMemo(
    () => {
      let title = 'Check in'
      let ShiftEnd = data?.userData?.ShiftEnd || '00:00';
      let getShiftEndHours = convertTime12to24(ShiftEnd);
      let date = new Date()
      console.log(date.getHours())
      console.log(getShiftEndHours.hours)
      if (date.getHours() > getShiftEndHours.hours - 1) {
        title = 'Check out'
      }
      return title
    }
    , [])
  return (
    <View style={[
      commonStyles.shadow,
      commonStyles.center, commonStyles.fullWidth, commonStyles.screenCommonPaddingHorizontal, { marginTop: -genericRatio(80) }]}>
      <View style={[styles.container, commonStyles.center, commonStyles.fullWidth]}>
        <TimeBindingFields />
        <Text style={[FONTS.body3, commonStyles.textFamily500, commonStyles.textColorBlack]}>{timingShiftDisplay}</Text>

        <CityCountryBindingFields ref={CityCountryRef} />
        
        <VerticalSpace />
        {CityCountryRef.current?.location !== "" &&
          <TouchableOpacity
          onPress={OnCheckInhandler}
          style={[commonStyles.fullWidth, commonStyles.rowDirection, commonStyles.center, styles.btnContainer]}>
          <Image source={rightBox} style={{ height: genericRatio(18), width: genericRatio(18) }} tintColor={'white'} />
          <HorizontalSpace />
          <Text style={[FONTS.body4, commonStyles.textFamily300, commonStyles.textColorWhite]}>{checkInOutBtnTitle}</Text>
        </TouchableOpacity>
        }
        <VerticalSpace />
        <View style={[commonStyles.center, commonStyles.rowDirection]}>
          <DatetitlePayment title={'Location'} date={data?.userData?.LocationName || ''} />
          <View style={{ height: '100%', width: 1, backgroundColor: COLORS.darkgray }} />
          <DatetitlePayment title={'Shift'} date={data?.userData?.ShiftName || ''} />
        </View>
      </View>
    </View>
  )
}

export default memo(CheckInLocation)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10
  },
  btnContainer: {
    backgroundColor: '#ee9700',
    paddingVertical: 10,
    borderRadius: 10
  }
})