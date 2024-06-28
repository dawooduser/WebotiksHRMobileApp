import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, commonStyles } from '../../../constant/theme'
import { AntDesign, LocationPin } from '../../../constant/icon'
import { genericRatio } from '../../../helper/helper'
import HorizontalSpace from '../HorizontalSpace'

const ItemProfiles = ({imageIconView, title, cb}) => {
  return (
    <TouchableOpacity 
    onPress={cb} activeOpacity={.9}
    style={[commonStyles.shadow, 
        commonStyles.fullWidth, commonStyles.rowDirectionCenter, commonStyles.spaceBetween]}>
      <View style={[commonStyles.rowDirectionCenter]}>
        <View style={[styles.iconContaier, commonStyles.center]}>
            {imageIconView}
        </View>
        <HorizontalSpace width={genericRatio(18)} />
        <Text style={[FONTS.body4, commonStyles.textColorBlack, commonStyles.textFamily600]}>{title}</Text>
      </View>
      <AntDesign name={'right'} size={genericRatio(20)} color={'#929292'} />
    </TouchableOpacity>
  )
}
ItemProfiles.defaultProps = {
    imageIconView: <View />,
    title: '',
    cb: () => console.log('ItemProfiles item click')
}

export default ItemProfiles

const styles = StyleSheet.create({
    iconContaier: {
        backgroundColor: '#F3F4F6',
        height: genericRatio(40),
        width: genericRatio(40),
        borderRadius: genericRatio(40)
    },
    CateGoryFontStyle: {
        fontFamily: "GeneralSans-Medium"
    },
    textFontFamily: {
        fontFamily: "GeneralSans-Semibold"
    },
})