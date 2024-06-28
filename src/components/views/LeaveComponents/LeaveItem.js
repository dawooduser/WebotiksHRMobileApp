import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, commonStyles } from '../../../constant/theme'

const LeaveItem = ({title, onPressCB, selectedIndex, index}) => {
  return (
    <TouchableOpacity 
    onPress={() => onPressCB(index)}
    style={[styles.container, index == selectedIndex && styles.selectedIndex, commonStyles.center]}>
      <Text style={[FONTS.body3, commonStyles.textFamily300, index !== selectedIndex ? commonStyles.textColorBlack : commonStyles.textColorWhite]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default LeaveItem

const styles = StyleSheet.create({
    selectedIndex: {
        backgroundColor: COLORS.primary,
        paddingVertical:10,
        paddingHorizontal: 15,
        borderRadius: 10
    }
})