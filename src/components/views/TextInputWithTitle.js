import { StyleSheet, Text, TextInput, View, } from 'react-native'
import React from 'react'
import { COLORS, FONTS, commonStyles } from '../../constant/theme'
import { genericRatio } from '../../helper/helper'
import { VerticalSpace } from '..'

const TextInputWithTitle = ({ borderRadius, _defaultValue, placeholderText, FieldTitle, keyboardType, onChangeTextCb }) => {
  return (
    <View style={[commonStyles.fillFullScreen]}>
      <Text style={[FONTS.body3, commonStyles.textColorBlack, styles.textFontFamily]}>{FieldTitle}</Text>
      <VerticalSpace container={{ marginVertical: genericRatio(2) }} />
      <TextInput placeholder={placeholderText}
        style={[styles.TextInputContainer, commonStyles.shadow, { borderRadius, }]}
        defaultValue={_defaultValue}
        keyboardType={keyboardType} onChangeText={onChangeTextCb}
      />
    </View>
  )
}

TextInputWithTitle.defaultProps = {
  borderRadius: genericRatio(2),
  placeholderText: '',
  FieldTitle: '',
  keyboardType: 'default',
  onChangeTextCb: (val) => console.log(val),
  _defaultValue: ''
}

export default TextInputWithTitle

const styles = StyleSheet.create({
  TextInputContainer: {
    backgroundColor: '#FBFBFB',
    padding: 0,
    height: genericRatio(45),
    borderWidth: genericRatio(0.5),
    borderColor: COLORS.darkgray,
    paddingHorizontal: genericRatio(15)
  },
  CateGoryFontStyle: {
    fontFamily: "Lexend-Medium"
  },
  textFontFamily: {
    fontFamily: "Lexend-Semibold"
  },
})