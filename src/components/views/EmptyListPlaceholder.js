import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { commonStyles } from '../../constant/theme'
import { onEmptyListImage } from '../../constant/images'
import { genericRatio } from '../../helper/helper'

const EmptyListPlaceholder = () => {
  return (
    <View style={[commonStyles.fillFullScreen]}>
      <Image source={onEmptyListImage} style={[styles.image]} />
    </View>
  )
}

export default EmptyListPlaceholder

const styles = StyleSheet.create({
    image: {
        height: genericRatio(300),
        width: '100%'
    }
})