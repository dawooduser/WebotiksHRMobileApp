import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo } from 'react'
import { COLORS, FONTS, commonStyles } from '../../../constant/theme'
import { ProfileImagePlaceHolder } from '../../../constant/images'
import FastImage from 'react-native-fast-image'
import { Entypo } from '../../../constant/icon'
import VerticalSpace from '../VerticalSpace'
import { genericRatio } from '../../../helper/helper'
import { useSelector } from 'react-redux'


const ProfileImageEmailSection = () => {

    const userData = useSelector(x => x.user.userData)
    const name = `${userData?.FirstName || ''} ${userData?.LastName || ''}`
    const email = userData?.Email || '-'

    const ImageSrcUrl = useMemo(() => {
        let imagePt = ProfileImagePlaceHolder
        return imagePt
    }, [])
    
    return (
        <View style={[commonStyles.fullWidth, styles.container, commonStyles.center]}>
            <View>
                <FastImage source={ImageSrcUrl} style={styles.imageProfile} resizeMode={'contain'} />
                {/* <View style={styles.positionIconContainer}>
                <TouchableOpacity style={[styles.iconContainer, commonStyles.center]}>
                    <Entypo name={'camera'} color={COLORS.secondary} size={genericRatio(20)} />
                </TouchableOpacity>
                </View> */}
            </View>
            <VerticalSpace />
            <Text style={[commonStyles.textColorBlack, FONTS.body2, commonStyles.textFamily500]}>{name}</Text>
            <Text style={[FONTS.body5, commonStyles.textFamily300, commonStyles.textColorBlack]}>{email}</Text>
            
        </View>
    )
}

export default ProfileImageEmailSection

const styles = StyleSheet.create({
    container: {
        paddingVertical: genericRatio(10)
    },
    imageProfile: {
        height: genericRatio(100),
        width: genericRatio(100),
        borderRadius: genericRatio(100),
    },
    iconContainer: {
        height: genericRatio(40),
        width: genericRatio(40),
        borderRadius: genericRatio(40),
        backgroundColor: COLORS.primary,
    },
    positionIconContainer: {
        position: 'absolute',
        bottom: -5,
        right: -10,
    },
    CateGoryFontStyle: {
        fontFamily: "GeneralSans-Medium"
    },
    textFontFamily: {
        fontFamily: "GeneralSans-Semibold"
    },
})