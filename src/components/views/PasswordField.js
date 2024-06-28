import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useCallback, useState } from 'react'
import { Feather } from '../../constant/icon'
import { genericRatio } from '../../helper/helper'
import { COLORS, commonStyles } from '../../constant/theme'

const PasswordField = ({placeholderText, keyboardType, handlerChnageText}) => {
    const [textVisibiltyToggle, setTextVisibiltyToggle] = useState(false)

    const PasswordBtnViewer = useCallback(() => {
        return <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setTextVisibiltyToggle(!textVisibiltyToggle)}>
            <Feather
                name={!textVisibiltyToggle ? "eye" : "eye-off"}
                color={COLORS.lightGray7}
                size={genericRatio(20)}
            />
        </TouchableOpacity>
    }, [textVisibiltyToggle])

  return (
    <View style={[styles.passwordField, commonStyles.fullWidth, commonStyles.rowDirectionCenter]}>
    <TextInput
        secureTextEntry={textVisibiltyToggle}
        placeholder={placeholderText}
        keyboardType={keyboardType}
        onChangeText={handlerChnageText}
        style={{ height: genericRatio(45), flex: 1 }} />
    <PasswordBtnViewer />
</View>
  )
}
PasswordField.defaultProps = {
    placeholderText: ''
}

export default PasswordField

const styles = StyleSheet.create({
    passwordField: {
        height: genericRatio(45),
        borderWidth: 0.5, borderRadius: 10,
        borderColor: COLORS.darkgray,
        paddingHorizontal: 20,
    },
})