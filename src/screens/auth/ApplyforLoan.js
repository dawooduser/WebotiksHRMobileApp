import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef } from 'react'
import { BottomButtonModel, Header, VerticalSpace } from '../../components'
import { COLORS, FONTS, commonStyles } from '../../constant/theme'
import { genericRatio } from '../../helper/helper'

const ApplyforLoan = () => {
    let TextInputList = useRef({})
    const submitTextHandler = fieldName => {
        if (fieldName) {
            TextInputList?.current[fieldName]?.focus()
            return;
        }
    }
    return (
        <SafeAreaView style={[commonStyles.fillFullScreen, styles.container]}>
            <Header centerText={'Loan Request'} backVisible />
            <ScrollView style={[commonStyles.fillFullScreen]} contentContainerStyle={{ padding: genericRatio(15) }}>
                <View style={[commonStyles.rowDirectionCenter, commonStyles.spaceBetween, commonStyles.fullWidth]}>
                    <View style={[commonStyles.fillFullScreen, ]}>
                        <Text style={[FONTS.body3, commonStyles.textColorBlack, commonStyles.textFamily500]}>{"Loan Amount"}</Text>
                    </View>
                    <View style={[commonStyles.fillFullScreen, styles.InputTextContainer]}>
                        <TextInput ref={(ref) => TextInputList.current['loanAmount'] = ref} 
                        style={[styles.TextInput]} placeholder='Loan Amount' keyboardType={'decimal-pad'} 
                        onSubmitEditing={() => submitTextHandler("installment")}
                        />
                    </View>
                </View>
                <VerticalSpace />
                <View style={[commonStyles.rowDirectionCenter, commonStyles.spaceBetween, commonStyles.fullWidth]}>
                    <View style={[commonStyles.fillFullScreen, ]}>
                        <Text style={[FONTS.body3, commonStyles.textColorBlack, commonStyles.textFamily500]}>{"Installment"}</Text>
                    </View>
                    <View style={[commonStyles.fillFullScreen, styles.InputTextContainer]}>
                        <TextInput ref={(ref) => TextInputList.current['installment'] = ref} style={[styles.TextInput]} 
                        placeholder='installment' keyboardType={'decimal-pad'} 
                        onSubmitEditing={() => submitTextHandler("monthlyamount")}
                        />
                    </View>
                </View>
                <VerticalSpace />
                <View style={[commonStyles.rowDirectionCenter, commonStyles.spaceBetween, commonStyles.fullWidth]}>
                    <View style={[commonStyles.fillFullScreen, ]}>
                        <Text style={[FONTS.body3, commonStyles.textColorBlack, commonStyles.textFamily500]}>{"Monthly Amount"}</Text>
                    </View>
                    <View style={[commonStyles.fillFullScreen, styles.InputTextContainer]}>
                        <TextInput ref={(ref) => TextInputList.current['monthlyamount'] = ref} style={[styles.TextInput]} 
                        placeholder='Monthly Amount' keyboardType={'decimal-pad'} 
                        onSubmitEditing={() => submitTextHandler("des")}
                        />
                    </View>
                </View>
                <VerticalSpace />
                <View style={[commonStyles.fullWidth]}>
                    <View style={[commonStyles.fillFullScreen,]}>
                        <Text style={[FONTS.body3, commonStyles.textColorBlack, commonStyles.textFamily500]}>{"Description"}</Text>
                    </View>
                    <VerticalSpace />
                    <View style={[commonStyles.fillFullScreen, styles.InputTextContainer, { paddingVertical: 10}]}>
                        <TextInput
                            multiline={true}
                            ref={(ref) => TextInputList.current['des'] = ref}
                            numberOfLines={4}
                            placeholder='Description here'
                            style={[styles.TextInput, {height: genericRatio(80), textAlignVertical: 'top',}]}
                            // onChangeText={(text) => this.setState({ text })}
                            />
                    </View>
                </View>
                <VerticalSpace />
                <BottomButtonModel title={'Apply'} 
                        textStyle={[FONTS.body2, { color: COLORS.white,}]}
                        container={[commonStyles.fullWidth, styles.bottomContainer]} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default ApplyforLoan

const styles = StyleSheet.create({
    InputTextContainer: {
        borderWidth: genericRatio(0.5),
        borderColor: COLORS.lightGray7,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    TextInput: {
        height: genericRatio(35),
        flex: 1,
        padding: 0,
    },
    bottomContainer: {backgroundColor: COLORS.primary, borderRadius: 10}
})