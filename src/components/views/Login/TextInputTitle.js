import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardType } from 'react-native'
import React, { useCallback, useMemo, useState, memo } from 'react'
import { FONTS, commonStyles } from '../../../constant/theme'
import { genericRatio } from '../../../helper/helper'
import { Feather } from '../../../constant/icon'

const TextInputTitle = ({ _keyboardType, fieldTitle, placeholderText, getValueCB, value, submitCB, isPasswordFields }) => {
    const [textVisibilty, setTextVisibility] = useState(true);
    const toggleDisplayText = useMemo(() => {
        return textVisibilty;
    }, [textVisibilty]);
    const textVisibiltyToggle = useCallback((val) => setTextVisibility(val), []);
    const ShowTogglePasswordSwicthView = useCallback(() => {
        if (!isPasswordFields) return null;
        return (
            <TouchableOpacity
                style={[commonStyles.center, {paddingHorizontal: 10,}]}
                activeOpacity={0.9}
                onPress={() => textVisibiltyToggle(!textVisibilty)}>
                <Feather
                    name={!toggleDisplayText ? "eye" : "eye-off"}
                    color={"#9CA3AF"}
                    size={genericRatio(25)}
                />
            </TouchableOpacity>
        );
    }, [isPasswordFields, toggleDisplayText]);
    return (
        <View style={[commonStyles.fullWidth, styles.container]}>
            <Text style={[commonStyles.textFamily300, styles.title]}>{fieldTitle}</Text>
            <View style={[commonStyles.rowDirection,]}>
                <View style={[commonStyles.fillFullScreen]}>
                    <TextInput style={[commonStyles.fullWidth, FONTS.body4, commonStyles.textFamily300, styles.textInputContainer]}
                        placeholder={placeholderText}
                        keyboardType={_keyboardType}
                        onChangeText={getValueCB}
                        defaultValue={value}
                        onSubmitEditing={submitCB}
                        secureTextEntry={isPasswordFields && toggleDisplayText}
                    />
                </View>
                <ShowTogglePasswordSwicthView />
            </View>
        </View>
    )
}

TextInputTitle.defaultProps = {
    isPasswordFields: false,
    placeholderText: "",
    fieldTitle: '',
    _keyboardType: "default",
    getValueCB: () => { },
    value: "",
    editable: true,
    submitCB: () => {
        Keyboard.dismiss()
    }
};
export default memo(TextInputTitle);

const styles = StyleSheet.create({
    container: {
        borderColor: '#D4D4D4', borderWidth: 1, paddingHorizontal: 15,
        paddingVertical: 10, borderRadius: 10
    },
    title: { fontSize: genericRatio(10), color: '#004976' },
    textInputContainer: {
        color: '#101317', height: genericRatio(30), padding: 0
    }
})