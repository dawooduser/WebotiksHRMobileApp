import { SafeAreaView, StyleSheet, Text, View, ScrollView, TextInput, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, commonStyles } from '../../constant/theme'
import { FieldsDropDown, Header, TextInputTitle, VerticalSpace } from '../../components'
import { genericRatio } from '../../helper/helper'
import { ImagePickerIcon } from '../../constant/images'

const ApplyforLeave = () => {
    const [ApplyforLeaveStates, setApplyforLeaveStates] = useState({
        startDate: null, endDate: null
    })
    return (
        <SafeAreaView style={[commonStyles.fillFullScreen, styles.container]}>
            <ScrollView style={[commonStyles.fillFullScreen]}>
                <Header backVisible centerText={'Apply Leave'} />
                <VerticalSpace container={{ marginVertical: 20 }} />
                <View style={[commonStyles.fullWidth, commonStyles.screenCommonPaddingHorizontal, commonStyles.center]}>
                    <TextInputTitle
                        fieldTitle={"Title"}
                        _keyboardType={'email-address'}
                        placeholderText={'Sick Leave'}
                        getValueCB={(text) => console.log(text)}
                    />
                    <VerticalSpace />
                    <FieldsDropDown fieldTitle={'Leave Type'} />
                    <VerticalSpace />
                    <TextInputTitle
                        fieldTitle={"Contact Number"}
                        _keyboardType={'phone-pad'}
                        placeholderText={'Please enter contact number'}
                        getValueCB={(text) => console.log(text)}
                    />
                    <VerticalSpace />
                    <View style={[styles.ReasonWhy, commonStyles.fullWidth]}>
                        <Text style={[commonStyles.textFamily300, styles.Title]}>{"Start Date"}</Text>
                        <View style={[commonStyles.rowDirectionCenter, commonStyles.spaceBetween]}>
                            <Text style={[FONTS.body3, commonStyles.textFamily300]}>{"Please select start date"}</Text>
                            <Image source={ImagePickerIcon} style={{height: 25, width: 25}} />
                        </View>
                    </View>
                    <VerticalSpace />
                    <View style={[styles.ReasonWhy, commonStyles.fullWidth]}>
                        <Text style={[commonStyles.textFamily300, styles.Title]}>{"End Date"}</Text>
                        <View style={[commonStyles.rowDirectionCenter, commonStyles.spaceBetween]}>
                            <Text style={[FONTS.body3, commonStyles.textFamily300]}>{"Please select end date"}</Text>
                            <Image source={ImagePickerIcon} style={{height: 25, width: 25}} />
                        </View>
                    </View>
                    <VerticalSpace />
                    <View style={[styles.ReasonWhy, commonStyles.fullWidth]}>
                        <Text style={[commonStyles.textFamily300, styles.Title]}>{"Reason for Leave"}</Text>
                        <TextInput
                            multiline={true}
                            numberOfLines={10}
                            style={{ height: 100, textAlignVertical: 'top', }} />
                    </View>
                    <VerticalSpace />
                    <TouchableOpacity style={[commonStyles.center, commonStyles.fullWidth,
                    {backgroundColor: '#004976', borderRadius: 10, paddingVertical: 10}]}>
                    <Text style={[FONTS.body2, commonStyles.textColorWhite, commonStyles.textFamily300]}>{"Apply Leave"}</Text>
                </TouchableOpacity>
                </View>
                
            </ScrollView>
        </SafeAreaView>
    )
}

export default ApplyforLeave

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.secondary
    },
    Title: { fontSize: genericRatio(10), color: '#004976' },
    ReasonWhy: {
        borderColor: '#D4D4D4', borderWidth: 1, paddingHorizontal: 15,
        paddingVertical: 10, borderRadius: 10
    }
})