import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, commonStyles } from '../../../constant/theme'
import { genericRatio } from '../../../helper/helper'

const DoneBtn = ({onPressCB = () => {}}) => {
  return (
    <TouchableOpacity style={[styles.container, commonStyles.center]} onPress={onPressCB}>
      <Text style={[FONTS.body5, commonStyles.textColorWhite, styles.textFontFamily]}>Save</Text>
    </TouchableOpacity>
  )
}

export default DoneBtn

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        paddingVertical: genericRatio(5),
        paddingHorizontal: genericRatio(10),
        borderRadius: 10
    },
    CateGoryFontStyle: {
        fontFamily: "Lexend-Medium"
    },
    textFontFamily: {
        fontFamily: "Lexend-Semibold"
    },
})