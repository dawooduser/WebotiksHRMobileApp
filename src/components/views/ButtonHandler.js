import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { COLORS, FONTS, commonStyles } from '../../constant/theme'

const ButtonHandler = ({ btnText, cb, textStyle, buttonContainer }) => {
    return (
        <TouchableOpacity style={[styles.container, commonStyles.center, commonStyles.fullWidth, commonStyles.shadow, buttonContainer]}
            onPress={cb}>
            <Text style={[FONTS.body2, commonStyles.textColorWhite, textStyle]}>{btnText}</Text>
        </TouchableOpacity>
    )
}
ButtonHandler.defaultProps = {
    btnText: '', buttonContainer: {}, textStyle: {},
    cb: () => console.warn('btn click')
}
export default ButtonHandler

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        paddingVertical: 5,
        borderWidth: 0.5,
        borderColor: COLORS.white,
        borderRadius: 10
    }
})