import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { genericRatio } from '../../helper/helper'
import { COLORS } from '../../constant/theme'

const SimpleTextInputFields = ({defaultValue, placeholderText, keyboardType, handlerChnageText}) => {
    return (
        <TextInput
            keyboardType={keyboardType} onChangeText={handlerChnageText}
            defaultValue={defaultValue}
            placeholder={placeholderText} style={styles.TextInputContainer} />
    )
}
SimpleTextInputFields.defaultProps = {
    placeholderText: '', keyboardType: "default", defaultValue: '',
    handlerChnageText: (val) => console.log("handlerChnageText => value => ", val)
}
export default SimpleTextInputFields

const styles = StyleSheet.create({
    TextInputContainer: {
        height: genericRatio(45),
        borderWidth: 0.5,
        borderColor: COLORS.darkgray,
        padding: 0, paddingHorizontal: 20,
        borderRadius: 10
    },
    
})