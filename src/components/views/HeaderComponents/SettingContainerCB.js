import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { plusContainer, settingContainer } from '../../../constant/images'
import { genericRatio } from '../../../helper/helper'

const SettingContainerCB = () => {
  return (
    <TouchableOpacity>
        <Image source={settingContainer} style={styles.size} />
    </TouchableOpacity>
  )
}

export default SettingContainerCB

const styles = StyleSheet.create({
    size: {
        height: genericRatio(25),
        width: genericRatio(25),
    }
})