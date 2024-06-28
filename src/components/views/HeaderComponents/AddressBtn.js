import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '../../../constant/icon'
import { genericRatio, screenNavigation } from '../../../helper/helper'
import { COLORS } from '../../../constant/theme'

const AddressBtn = () => {
    const navigation = useNavigation()
    const addAddressScreen = () => screenNavigation(navigation, "AddDelivery")
    return (
      <TouchableOpacity onPress={addAddressScreen}>
          <MaterialIcons name={'add-business'} color={COLORS.black} size={genericRatio(25)} />
      </TouchableOpacity>
    )
}

export default AddressBtn

const styles = StyleSheet.create({})