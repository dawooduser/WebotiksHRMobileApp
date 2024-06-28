import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { memo, useCallback, useMemo, useState } from 'react'
import { AttendanceItem, CalenderMonthWithYear, Header, VerticalSpace } from '../../components'
import { COLORS, commonStyles } from '../../constant/theme'
import { AttendanceData } from '../../helper/helper'

const AttandanceList = () => {
  const [attandanceListState, setAttandanceList] = useState({
    list: []
  });
  const onChangeMonthDateHndler = (monthName) => {
    const data = AttendanceData[monthName] ?? []
    setAttandanceList((prv) => ({ ...prv, list: [...data] }))
  }
  const _List = useMemo(() => attandanceListState?.list || [], [attandanceListState.list])

  return (
    <SafeAreaView style={[commonStyles.fillFullScreen, styles.container]}>
      <Header centerText={'Attendance Detail'} backVisible />
      <ScrollView style={[commonStyles.fillFullScreen]}>
        <VerticalSpace />
        <CalenderMonthWithYear onChngeMonthData={onChangeMonthDateHndler} />
        <View style={[commonStyles.screenCommonPaddingHorizontal,]}>
          <VerticalSpace />
          {_List.map((val, index) => (
            <View key={index} style={[index !== 0 && { marginTop: 10 }]}>
              <AttendanceItem key={index} data={val} />
            </View>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default memo(AttandanceList)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f5fb'
  }
})