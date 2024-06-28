import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { FONTS, commonStyles } from '../../../constant/theme'
import { genericRatio } from '../../../helper/helper'
import { AntDesign } from '../../../constant/icon'

const FieldsDropDown = ({ fieldTitle }) => {
    const [fieldsDropDownState, setFieldsDropDownState] = useState({
        visible: false, onSelectItem: ''
    })
    const selectItem = val => setFieldsDropDownState({...fieldsDropDownState, visible: false, onSelectItem: val})
    return (
        <View style={[commonStyles.fullWidth, styles.container]}>
            <Text style={[commonStyles.textFamily300, styles.title]}>{fieldTitle}</Text>
            <View style={[commonStyles.rowDirectionCenter,]}>
                <View style={[commonStyles.fillFullScreen]}>
                    <Text style={[FONTS.body3, commonStyles.textFamily300]}>{!fieldsDropDownState.onSelectItem ? "Please select leave type" : fieldsDropDownState.onSelectItem}</Text>
                </View>
                <AntDesign name={fieldsDropDownState.visible ? "caretup" : "caretdown"} />
            </View>
        </View>
    )
}

export default FieldsDropDown

const styles = StyleSheet.create({
    container: {
        borderColor: '#D4D4D4', borderWidth: 1, paddingHorizontal: 15,
        paddingVertical: 10, borderRadius: 10
    },
    title: { fontSize: genericRatio(10), color: '#004976' }

})