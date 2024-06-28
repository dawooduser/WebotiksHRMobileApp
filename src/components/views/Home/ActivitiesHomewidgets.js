import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FONTS, commonStyles } from '../../../constant/theme'
import { genericRatio, screenNavigation } from '../../../helper/helper'
import { AttendanceIcon, BenefitsIcon, ManageIcon, PayslipIcon } from '../../../constant/images'
import { useNavigation } from '@react-navigation/native'

const ActivitiesHomewidgets = () => {
    const navigation = useNavigation()
    const navigationHandler = screenName => screenNavigation(navigation, screenName)
    return (
        <View style={[
            commonStyles.shadow,
            commonStyles.center, commonStyles.fullWidth, commonStyles.screenCommonPaddingHorizontal,]}>
            <View style={[styles.container, commonStyles.fullWidth]}>
                <View style={{ paddingHorizontal: 10 }}><Text style={[FONTS.body3, commonStyles.textFamily500, commonStyles.textColorBlack]}>{"Your Activity"}</Text></View>
                <View style={[commonStyles.fillFullScreen, commonStyles.rowDirection, { flexWrap: 'wrap' }]}>
                    <TouchableOpacity style={styles.ActivityWidget} onPress={() => navigationHandler("AttandanceList")}>
                        <Image source={AttendanceIcon} style={{ height: genericRatio(40), width: genericRatio(40) }} />
                        <Text style={[FONTS.body4, commonStyles.textColorBlack, commonStyles.textFamily500]}>{"Attendance"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ActivityWidget} onPress={() => navigationHandler("Loan")}>
                        <Image source={PayslipIcon} style={{ height: genericRatio(40), width: genericRatio(40) }} />
                        <Text style={[FONTS.body4, commonStyles.textColorBlack, commonStyles.textFamily500]}>{"Loan"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ActivityWidget} onPress={() => navigationHandler("TeamMember")}>
                        <Image source={ManageIcon} style={{ height: genericRatio(40), width: genericRatio(40) }} />
                        <Text style={[FONTS.body4, commonStyles.textColorBlack, commonStyles.textFamily500]}>{"Manage Team"}</Text>
                    </TouchableOpacity>
                    <View style={styles.ActivityWidget}>
                        <Image source={BenefitsIcon} style={{ height: genericRatio(40), width: genericRatio(40) }} />
                        <Text style={[FONTS.body4, commonStyles.textColorBlack, commonStyles.textFamily500]}>{"Benefits"}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ActivitiesHomewidgets

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'blue',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        paddingVertical: 10
        // padding: 10
    },
    ActivityWidget: {
        height: genericRatio(80), width: '46%', marginTop: 10,
        marginLeft: 10, backgroundColor: '#f3f3f3',
        paddingHorizontal: 10, paddingVertical: 10,
        borderWidth: 1, borderColor: '#4d80a3',
        borderRadius: 10
    },
})