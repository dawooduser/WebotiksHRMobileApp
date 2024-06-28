import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import { COLORS, FONTS, commonStyles } from '../../../constant/theme'
import VerticalSpace from '../VerticalSpace'

const AttendanceItem = ({ data = {} }) => {
    const checkNotAbsentBool = useMemo(() => {
        let absentBool = false
        return absentBool = data.checkIN !== undefined ? data.checkIN ? true : false : false
    }, [])
    return (
        <View style={[styles.containre, commonStyles.fullWidth, commonStyles.shadow]}>
            <View style={[commonStyles.rowDirectionCenter]}>
            <View style={[ !checkNotAbsentBool ? styles.absentColor : styles.persentColor, styles.persentabsentStatus, commonStyles.center ]}>
                <Text style={[FONTS.body4, commonStyles.textFamily700, !checkNotAbsentBool && { color: COLORS.white }]}>
                    {`${data?.day || ''}, ${data?.date}`}
                </Text>
            </View>
            </View>
            <VerticalSpace />
            <View style={[commonStyles.rowDirectionCenter]}>
                <View style={[commonStyles.fillFullScreen, commonStyles.center]}>
                    <Text style={[styles.keyTile, commonStyles.textFamily400, FONTS.body3]}>{"Clock In"}</Text>
                    <Text style={[commonStyles.textColorBlack, commonStyles.textFamily400, FONTS.body3]}>{data?.checkIN || '-'}</Text>
                </View>
                <View style={[commonStyles.fillFullScreen, commonStyles.center]}>
                    <Text style={[styles.keyTile, commonStyles.textFamily400, FONTS.body3]}>{"Clock Out"}</Text>
                    <Text style={[commonStyles.textColorBlack, commonStyles.textFamily400, FONTS.body3]}>{data?.checkOut || '-'}</Text>
                </View>
            </View>
            
            <View style={[commonStyles.rowDirectionCenter]}>
                <View style={[commonStyles.fillFullScreen, commonStyles.center]}>
                    <Text style={[styles.keyTile, commonStyles.textFamily400, FONTS.body3]}>{"Shift"}</Text>
                    <Text style={[commonStyles.textColorBlack, commonStyles.textFamily400, FONTS.body3]}>{data?.shift || '-'}</Text>
                </View>
                <View style={[commonStyles.fillFullScreen, commonStyles.center]}>
                    <Text style={[styles.keyTile, commonStyles.textFamily400, FONTS.body3]}>{"Location"}</Text>
                    <Text style={[commonStyles.textColorBlack, commonStyles.textFamily400, FONTS.body3]}>{"-"}</Text>
                </View>
            </View>
        </View>
    )
}

export default AttendanceItem

const styles = StyleSheet.create({
    containre: {
        backgroundColor: COLORS.white,
        paddingVertical: 10,
        ...commonStyles.screenCommonPaddingHorizontal,
        borderRadius: 10
    },
    persentabsentStatus: {
        borderRadius: 10,
        borderTopLeftRadius: 0,
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    keyTile: {
        color: '#909090'
    },
    persentColor: {
        backgroundColor: '#d6fcd0'
    },
    absentColor: {
        backgroundColor: '#ff7f7f'
    }
})