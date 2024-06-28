import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, commonStyles } from '../../../constant/theme'
import { genericRatio } from '../../../helper/helper'
import { NotificationIcon, basketIcon } from '../../../constant/images'

const NotificationItem = ({title, subtitle, time}) => {
    return (
        <View style={[commonStyles.fullWidth, styles.container, commonStyles.rowDirectionCenter, commonStyles.shadow]}>
            <View style={[commonStyles.center, styles.iconContaier]}>
                <Image source={NotificationIcon} tintColor={'#8b97a8'} style={styles.iconSize} />
            </View>
            <View>
                <Text style={[FONTS.body4, commonStyles.textFamily500, commonStyles.textColorBlack]}>{title}</Text>
                <Text style={[FONTS.body5, commonStyles.textFamily400,]}>{subtitle}</Text>
                <Text style={[commonStyles.textFamily400, {fontSize: 10}]}>{time}</Text>
            </View>
        </View>
    )
}
NotificationItem.defaultProps = {
    title: "Order Confirmation", subtitle: "Your order has been confirmed.", time: "Feb 05, 2024 at 10:00am "
}
export default NotificationItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderWidth: genericRatio(0.5),
        borderRadius: 10,
        borderColor: COLORS.darkgray,
        paddingVertical: genericRatio(10),
        paddingHorizontal: genericRatio(10),
        marginTop: 10
    },
    CateGoryFontStyle: {
        fontFamily: "Lexend-Medium"
    },
    textFontFamily: {
        fontFamily: "Lexend-Semibold"
    },
    iconContaier: {
        backgroundColor: '#F3F4F6',
        height: genericRatio(40),
        width: genericRatio(40),
        borderRadius: genericRatio(40), 
        marginRight: 10
    },
    iconSize: {
        height: genericRatio(25),
        width: genericRatio(25)
    }
})