import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FONTS, commonStyles } from '../../../constant/theme'
import BackBtn from './BackBtn'

const Header = ({ backVisible, centerText, rightCompont, rightCompontVisible }) => {
  return (
    <View style={[styles.container, commonStyles.spaceBetween, commonStyles.rowDirectionCenter, commonStyles.screenCommonPaddingHorizontal]}>
      {backVisible ? <BackBtn /> : <View />}
      <Text style={[FONTS.body2, commonStyles.textFamily500, commonStyles.textColorBlack,]}>{centerText}</Text>
      {rightCompontVisible ? rightCompont : <View />}
    </View>
  )
}
Header.defaultProps = {
  backVisible: false,
  centerText: '',
  rightCompont: <View />,
  rightCompontVisible: false,
  centerComponent: <View />,
  leftComponent: <View />,
}
export default Header

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10
  }
})