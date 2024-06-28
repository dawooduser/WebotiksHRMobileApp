import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { plusContainer } from '../../../constant/images'
import { genericRatio } from '../../../helper/helper'

const PlusContainerImage = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <Image source={plusContainer} style={styles.size} />
    </TouchableOpacity>
  )
}
PlusContainerImage.defaultProps = {
  onPress: () => {}
}
export default PlusContainerImage

const styles = StyleSheet.create({
    size: {
        height: genericRatio(25),
        width: genericRatio(25),
    }
})