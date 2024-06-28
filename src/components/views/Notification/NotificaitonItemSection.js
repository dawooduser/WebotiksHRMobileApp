import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FONTS, commonStyles } from '../../../constant/theme'
import NotificationItem from './NotificationItem'

const NotificaitonItemSection = ({title}) => {
  return (
    <View style={[commonStyles.fullWidth, {marginTop: 10}]}>
      <Text style={[FONTS.h4, commonStyles.textColorBlack, styles.CateGoryFontStyle]}>{title}</Text>
      <NotificationItem />
    </View>
  )
}
NotificaitonItemSection.defaultProps={
  title: 'Today'
}
export default NotificaitonItemSection

const styles = StyleSheet.create({
  CateGoryFontStyle: {
    fontFamily: "Lexend-Medium"
  },
  textFontFamily: {
    fontFamily: "Lexend-Semibold"
  },
})