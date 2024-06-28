import { StyleSheet, Text, View } from 'react-native'
import React, { memo, useEffect, useState } from 'react'
import { FONTS, commonStyles } from '../../../constant/theme'

const TimeBindingFields = () => {
    const [currentTime, setCurrentTime] = useState('')
  useEffect(() => {
    recursiveTime()
    function recursiveTime() {
      var hours = new Date().getHours(); //Current Hours
      var min = new Date().getMinutes(); //Current Minutes
      var sec = new Date().getSeconds(); //Current Seconds
      let am_pm = 'AM';

      if (hours > 11) {
        am_pm = 'PM';
        if (hours > 12) {
          hours = hours - 12;
        }
      }

      if (hours == 0) {
        hours = 12;
      }
      
      
      setCurrentTime(`${String(hours).padStart(2, '0')}:${String(min).padStart(2, '0')} ${am_pm}`)
      setTimeout(recursiveTime, 60 * 1000)
    }
  }, [])
  return <Text style={[FONTS.largeTitle, commonStyles.textFamily500, commonStyles.textColorBlack]}>{currentTime}</Text>
}

export default memo(TimeBindingFields)

const styles = StyleSheet.create({})