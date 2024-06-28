import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, FONTS, commonStyles } from '../../constant/theme'
import { BackBtn, HorizontalSpace, LeaveItem, MonthListView, VerticalSpace, YearListView } from '../../components'

const PaySlip = () => {
  const [payslipState, setPaySlipState] = useState({
    selectedIndex: null,
  })
  const handlerCB = mode => {
    setPaySlipState({ ...payslipState, selectedIndex: mode })
  }
  useEffect(() => {
    handlerCB(0)
  }, [])
  return (
    <SafeAreaView style={[commonStyles.fillFullScreen, styles.container]}>
      <ScrollView style={[commonStyles.fillFullScreen]}>
        <View style={[styles.headerContainer, commonStyles.rowDirectionCenter, commonStyles.spaceBetween, commonStyles.screenCommonPaddingHorizontal]}>
          <BackBtn />
          <Text style={[FONTS.body2, commonStyles.textFamily500, commonStyles.textColorBlack,]}>{"Pay Slip"}</Text>
          <View />
        </View>
        <VerticalSpace />
        <View style={[
          commonStyles.fullWidth, commonStyles.screenCommonPaddingHorizontal,]}>
          <View style={[commonStyles.rowDirectionCenter, commonStyles.center]}>
            <LeaveItem title={'Monthly'} onPressCB={handlerCB}
              selectedIndex={payslipState.selectedIndex} index={0} />
            <HorizontalSpace />
            <LeaveItem title={'Yearly'} onPressCB={handlerCB}
              selectedIndex={payslipState.selectedIndex} index={1} />
          </View>
          <VerticalSpace />
          {payslipState.selectedIndex === 0 ? <MonthListView /> : <YearListView />}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default PaySlip

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary
  }, headerContainer: {
    paddingVertical: 10
  }
})