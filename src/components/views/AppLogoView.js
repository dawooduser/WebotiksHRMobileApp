import { Image, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { genericHeight, genericRatio } from '../../helper/helper'
import { commonStyles } from '../../constant/theme'
import { LoginLogo } from '../../constant/images'
import HorizontalSpace from './HorizontalSpace'

const AppLogoView = () => {
  return <Image style={styles.logo} source={LoginLogo} /> 
}

export default memo(AppLogoView)

const styles = StyleSheet.create({
  logo: {
    height: genericRatio(100), width: genericRatio(140)
  }
})