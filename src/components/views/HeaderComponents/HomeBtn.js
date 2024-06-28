import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather, MaterialCommunityIcons } from '../../../constant/icon'
import { COLORS, SIZES } from '../../../constant/theme'
import { useNavigation } from '@react-navigation/native'
import { hardScreenNavigation, screenNavigation } from '../../../helper/helper'

const HomeBtn = () => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => hardScreenNavigation(navigation, "MyTabs")}>
            <Feather name="home" color={'#232323'} size={SIZES.iconSize} />
        </TouchableOpacity>
    )
}

export default HomeBtn

const styles = StyleSheet.create({})