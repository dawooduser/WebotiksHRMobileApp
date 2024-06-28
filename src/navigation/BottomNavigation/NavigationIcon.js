import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationIconList, OrdersIcon } from '../../constant/icon'
import { COLORS } from '../../constant/theme'
import { genericRatio } from '../../helper/helper'

const NavigationIcon = ({route, isFocused}) => {
  return (
    <Image 
    tintColor={isFocused ? COLORS.primary : '#9ca3af'}
    style={styles.iconSize}
    source={NavigationIconList[route.toLowerCase()] ?? OrdersIcon} />
  )
}

export default NavigationIcon

const styles = StyleSheet.create({
    iconSize: {
        height: genericRatio(20),
        width: genericRatio(20)
    }
})