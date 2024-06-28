import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '../../../constant/icon'
import { COLORS, SIZES } from '../../../constant/theme'

const SearchBtn = ({cb}) => {
  return (
    <TouchableOpacity onPress={cb}>
        <AntDesign name="search1" color={'#232323'} size={SIZES.iconSize} />
    </TouchableOpacity>
  )
}
SearchBtn.defaultProps = {
  cb: () => {}
}
export default SearchBtn

const styles = StyleSheet.create({})