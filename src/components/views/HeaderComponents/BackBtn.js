import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '../../../constant/icon'
import { COLORS } from '../../../constant/theme'
import { genericRatio } from '../../../helper/helper'
import { useNavigation } from '@react-navigation/native'
import { backArrowBtn } from '../../../constant/images'

const BackBtn = () => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.pop()}>
        <Image source={backArrowBtn} style={{height: genericRatio(25), width: genericRatio(25)}} />
    </TouchableOpacity>
  )
}

export default BackBtn

const styles = StyleSheet.create({})