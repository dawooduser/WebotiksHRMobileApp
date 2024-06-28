import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import { COLORS, FONTS, commonStyles } from '../../../constant/theme'
import VerticalSpace from '../VerticalSpace'

const LeaveDataItem = ({data, selectedIndex}) => {
    const ColorPickBYindex = useMemo(() => {
        if (selectedIndex === 0) {
            return {
                darkColor: '#5ec9c2', lightColor: '#bae8e4',
                text: 'Approved'
            }
        }
        if (selectedIndex === 1) {
            //pending
            return {
                darkColor: '#fae500', lightColor: '#f8f9aa',
                text: 'Pending'
            }
        }
        if (selectedIndex === 2) {
            //cancel
            return {
                darkColor: '#bd1406', lightColor: '#bd14064d',
                text: 'Cancel'
            }
        }
    }, [selectedIndex])
  return (
    <View style={[commonStyles.fullWidth, styles.container]}>
      <View style={[commonStyles.rowDirectionCenter, commonStyles.spaceBetween]}>
        <View>
            <Text style={[FONTS.body4, commonStyles.textFamily300, commonStyles.textColorBlack]}>{"Date"}</Text>
            <Text style={[FONTS.body3, commonStyles.textFamily500, commonStyles.textColorBlack]}>{"Apr 15, 2023 - Apr 18, 2023"}</Text>
        </View>
        <View style={[commonStyles.center, styles.containerTag, {backgroundColor: ColorPickBYindex.lightColor}]}>
            <Text style={[FONTS.body5, commonStyles.textFamily400, {color: ColorPickBYindex.darkColor}]}>{ColorPickBYindex.text}</Text>
        </View>
      </View>
      <VerticalSpace />
      <View style={[commonStyles.rowDirection, commonStyles.fillFullScreen, commonStyles.spaceBetween]}>
        <View style={[commonStyles.fillFullScreen, commonStyles.center]}>
            <Text style={[FONTS.body5, commonStyles.textFamily300, commonStyles.textColorBlack]}>{"Apply Days"}</Text>
            <Text style={[FONTS.body3, commonStyles.textFamily500, commonStyles.textColorBlack]}>{"3 Days"}</Text>
        </View>
        <View style={[commonStyles.fillFullScreen, commonStyles.center]}>
            <Text style={[FONTS.body5, commonStyles.textFamily300, commonStyles.textColorBlack]}>{"Leave Balance"}</Text>
            <Text style={[FONTS.body3, commonStyles.textFamily500, commonStyles.textColorBlack]}>{"16"}</Text>
        </View>
        <View style={[commonStyles.fillFullScreen, commonStyles.center]}>
            <Text style={[FONTS.body5, commonStyles.textFamily300, commonStyles.textColorBlack]}>{"Approved By"}</Text>
            <Text style={[FONTS.body3, commonStyles.textFamily500, commonStyles.textColorBlack]}>{"Martin Deo"}</Text>
        </View>
      </View>
    </View>
  )
}

export default LeaveDataItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        padding: 10
    },
    containerTag: {
        paddingVertical: 5,
        paddingHorizontal: 10, borderRadius: 10
    }
})