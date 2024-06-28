import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, commonStyles } from '../../constant/theme'
import { HorizontalSpace, LeaveWidget, PlusContainerImage, SettingContainerCB, TabBtnContainer, VerticalSpace } from '../../components'

const Leaves = () => {
  return (
    <SafeAreaView style={[commonStyles.fillFullScreen, styles.container]}>
      <ScrollView style={[commonStyles.fillFullScreen]}>
      <View style={[styles.headerContainer, commonStyles.rowDirectionCenter, commonStyles.spaceBetween, commonStyles.screenCommonPaddingHorizontal]}>
        <Text style={[FONTS.body2, commonStyles.textFamily500, commonStyles.textColorBlack, ]}>{"All Leaves"}</Text>
        <View style={[commonStyles.rowDirectionCenter]}>
            <PlusContainerImage />
            <HorizontalSpace />
            <SettingContainerCB />
        </View>
      </View>
      <VerticalSpace />
      <View style={[commonStyles.fullWidth, commonStyles.screenCommonPaddingHorizontal]}>
        <View style={[commonStyles.rowDirectionCenter, commonStyles.spaceBetween]}>
            <LeaveWidget title={"Leave Balance"} value={'20'} passedStyles={{width: '49%'}} />
            <LeaveWidget title={"Leave Approved"} value={'02'} passedStyles={{width: '49%'}} />
        </View>
        <View style={[commonStyles.rowDirectionCenter, commonStyles.spaceBetween]}>
            <LeaveWidget title={"Leave Pending"} value={'04'} passedStyles={{width: '49%'}} />
            <LeaveWidget title={"Leave Cancelled"} value={'10'} passedStyles={{width: '49%'}} />
        </View>
      </View>
      <VerticalSpace />
      <TabBtnContainer />




      </ScrollView>
      
    </SafeAreaView>
  )
}

export default Leaves

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.secondary
    },
    headerContainer: {
        paddingVertical: 10
    }
})