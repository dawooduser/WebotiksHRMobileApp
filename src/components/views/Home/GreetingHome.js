import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useMemo } from 'react'
import { genericRatio } from '../../../helper/helper'
import { COLORS, FONTS, commonStyles } from '../../../constant/theme'
import VerticalSpace from '../VerticalSpace'
import { useSelector } from 'react-redux'

const GreetingHome = ({children}) => {
    const userData = useSelector(x => x.user.userData)
    const profileThumbnail = 'https://static-00.iconduck.com/assets.00/profile-major-icon-512x512-xosjbbdq.png';
    const nameView = useMemo(() => `Welcome, ${userData?.FirstName || ''} ${userData?.LastName || ''}`, [userData])
    return (
        <View style={[styles.container, commonStyles.fullWidth]}>
            <VerticalSpace />
            <View style={[commonStyles.screenCommonPaddingHorizontal, commonStyles.fullWidth, commonStyles.rowDirectionCenter, commonStyles.spaceBetween, styles.childContainer]}>
                <Text style={[FONTS.body2, commonStyles.textFamily500, { color: COLORS.white }]}>{nameView}</Text>
                <Image source={{ uri: profileThumbnail }} style={styles.profileIcon} />
            </View>
            
        </View>
    )
}

export default GreetingHome

const styles = StyleSheet.create({
    container: {
        height: genericRatio(140),
        backgroundColor: COLORS.primary
    },
    profileIcon: {
        height: genericRatio(40),
        width: genericRatio(40),
    },
    childContainer: {
        // backgroundColor: 'aqua'
    }
})