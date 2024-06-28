import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, commonStyles } from '../../../constant/theme'
import { genericRatio } from '../../../helper/helper'

const LoanItem = ({ Amount, dateStart, dateEnd, period, status }) => {
    return (
        <View style={[styles.container, commonStyles.fullWidth, commonStyles.shadow]}>
            <View style={[commonStyles.rowDirectionCenter, commonStyles.spaceBetween]}>
                <Text style={[FONTS.body3, commonStyles.textColorPrimary, commonStyles.textFamily500]}>{"Total Amount"}</Text>
                <Text style={[FONTS.body4, commonStyles.textColorBlack, commonStyles.textFamily400]}>{Amount + " PKR"}</Text>
            </View>
            <View style={[commonStyles.rowDirectionCenter, commonStyles.spaceBetween]}>
                <Text style={[FONTS.body3, commonStyles.textColorPrimary, commonStyles.textFamily500]}>{"Date"}</Text>
                <Text style={[FONTS.body4, commonStyles.textColorBlack, commonStyles.textFamily400]}>{dateStart + " to " + dateEnd}</Text>
            </View>
            <View style={[commonStyles.rowDirectionCenter, commonStyles.spaceBetween]}>
                <Text style={[FONTS.body3, commonStyles.textColorPrimary, commonStyles.textFamily500]}>{"Tenure"}</Text>
                <Text style={[FONTS.body3, commonStyles.textColorBlack, commonStyles.textFamily400]}>{period + " Days"}</Text>
            </View>
            <View style={[commonStyles.rowDirectionCenter, commonStyles.spaceBetween]}>
                <Text style={[FONTS.body3, commonStyles.textColorPrimary, commonStyles.textFamily500]}>{"Status"}</Text>
                <Text style={[FONTS.body3, { color: 'red' }, commonStyles.textFamily400]}>{status}</Text>
            </View>
        </View>
    )
}
LoanItem.defaultProps = {
    Amount: '0', dateStart: '', dateEnd: '', period: '', status: ''
}
export default LoanItem

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        padding: genericRatio(10),
        backgroundColor: COLORS.white,
    }
})