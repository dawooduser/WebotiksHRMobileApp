import { StyleSheet, Text, View } from 'react-native'
import React, { memo, useState } from 'react'
import { commonStyles } from '../../../constant/theme'
import LeaveItem from './LeaveItem'
import VerticalSpace from '../VerticalSpace'
import LeaveDataItem from './LeaveDataItem'

const TabBtnContainer = () => {
    const [tabBtnContainerStates, setTabBtnContainerStates] = useState({
        data: ['1'], selectedIndex: 0
    })
    const handlerCB = mode => {
        setTabBtnContainerStates({...tabBtnContainerStates, selectedIndex: mode})
    }
  return (
    <View style={[commonStyles.fullWidth, commonStyles.screenCommonPaddingHorizontal]}>
        <View style={[commonStyles.rowDirectionCenter, commonStyles.spaceBetween]}>
            <LeaveItem title={'Upcoming'} onPressCB={handlerCB} 
            selectedIndex={tabBtnContainerStates.selectedIndex} index={0} />
            <LeaveItem title={'Past'} onPressCB={handlerCB} 
            selectedIndex={tabBtnContainerStates.selectedIndex} index={1} />
            <LeaveItem title={'Team Leave'} onPressCB={handlerCB} 
            selectedIndex={tabBtnContainerStates.selectedIndex} index={2} />
        </View>
        <VerticalSpace />
        {tabBtnContainerStates.data.map((val, index) => <LeaveDataItem data={val} key={index} selectedIndex={tabBtnContainerStates.selectedIndex} /> )}
    </View>
  )
}

export default memo(TabBtnContainer)

const styles = StyleSheet.create({})