import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { genericRatio } from '../../../helper/helper'
import { FONTS, commonStyles } from '../../../constant/theme'

const LeaveWidget = ({title, value, passedStyles}) => {
  return (
    <View style={[commonStyles.fullWidth, styles.container, commonStyles.spaceBetween, passedStyles]}>
      <Text style={[FONTS.body3, commonStyles.textFamily500, commonStyles.textColorBlack]}>{title}</Text>
      <Text style={[FONTS.h2, commonStyles.textFamily500, {color: '#ee9700'}]}>{value}</Text>
    </View>
  )
}
LeaveWidget.defaultProps = {
    title: '',
    value: '',
    passedStyles: {}
}
export default LeaveWidget

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fdf2e0',
        height: genericRatio(90), borderWidth: genericRatio(2),
        borderColor: '#f4ba50',
        marginTop: '2%',
        padding: 10
    }
})