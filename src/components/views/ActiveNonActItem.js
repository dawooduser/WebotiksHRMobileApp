import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, commonStyles } from '../../constant/theme'

const ActiveNonActItem = ({index, data, marginTop = 0, title, selectedBool = false, onPressCB = () => {}}) => {
  return (
    <TouchableOpacity 
    onPress={() => onPressCB(index)}
    style={[commonStyles.center, styles.itemContainer, selectedBool && styles.itemSelecterBackgroundColor, {marginTop}]}>
      <Text style={[selectedBool && styles.itemSelectorTextColor, FONTS.body3, commonStyles.textFamily400]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ActiveNonActItem

const styles = StyleSheet.create({
    itemContainer: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        backgroundColor: COLORS.white
    },
    itemSelecterBackgroundColor: {
        backgroundColor: COLORS.primary
    },
    itemSelectorTextColor: {
        color: COLORS.white
    }
})