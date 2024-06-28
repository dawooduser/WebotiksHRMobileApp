import { FONTS, commonStyles } from "../../../constant/theme"
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'



const DatetitlePayment = ({title, date}) => (
    <View style={[commonStyles.fillFullScreen, commonStyles.center]}>
        <Text style={[FONTS.body4, commonStyles.textFamily300, { color: '#999' }]}>{title}</Text>
        <Text style={[FONTS.body2, commonStyles.textFamily500, commonStyles.textColorBlack]}>{date}</Text>
    </View>
)
DatetitlePayment.defaultProps = {
    title: '', date: ''
}
export default DatetitlePayment

