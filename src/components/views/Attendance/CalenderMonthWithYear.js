import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo, useCallback, useLayoutEffect, useRef, useState } from 'react'
import { COLORS, FONTS, commonStyles } from '../../../constant/theme'
import { AntDesign } from '../../../constant/icon'
import { genericRatio, monthList } from '../../../helper/helper'
import HorizontalSpace from '../HorizontalSpace'
import BottomSheetContainer from '../BottomSheetContainer'
import ActiveNonActItem from '../ActiveNonActItem'
import { SystemDateContextData } from '../../../customHooks/hooks/useSystemStandardTime'

const CalenderMonthWithYear = ({onChngeMonthData = function(){}}) => {
    const {systemDateTime, _date, listOfYear} = SystemDateContextData()
    const BottomSheetContainerRef = useRef()
    const BottomSheetContainerYearRef = useRef()
    const [monthIndex, setMonthIndex] = useState(null)
    const [yearIndex, setYearIndex] = useState(null)
    const ButtonHandler = useCallback(({ children, onPressCB }) => (
        <TouchableOpacity onPress={onPressCB} style={[{ height: '100%', }]}>{children}</TouchableOpacity>
    ), [])
    const upwardBackWardHandler = useCallback((mode) => {
        let index = monthIndex
        if (mode == "backward") {
           setMonthIndex(--index)
        } else {
            setMonthIndex(++index)
        }
        onChngeMonthData(monthList[index])
    }, [monthIndex])

    useLayoutEffect(() => {
        const currentMonthIndex = _date.getMonth()
        setMonthIndex(currentMonthIndex)
        onChngeMonthData(monthList[currentMonthIndex])
        setYearIndex(0)
    }, [])

    const ItemHandler = useCallback((index) => {
        setMonthIndex(index)
        BottomSheetContainerRef.current.close()
    }, [])
    const ItemHandlerYear = useCallback((index) => {
        setYearIndex(index)
        BottomSheetContainerYearRef.current.close()
    }, [])
    return (
        <View style={[commonStyles.fullWidth, commonStyles.rowDirectionCenter, commonStyles.spaceBetween, commonStyles.screenCommonPaddingHorizontal]}>
            {monthIndex >= 1 && <ButtonHandler onPressCB={() => upwardBackWardHandler('backward')}>
                <AntDesign name={'leftcircle'} size={genericRatio(15)} color={"#c0bbc9"} />
            </ButtonHandler>}
            <View style={[commonStyles.fillFullScreen, commonStyles.center, commonStyles.rowDirection,]}>
                <AntDesign name={'calendar'} size={genericRatio(20)} color={COLORS.primary} />
                <HorizontalSpace />
                <TouchableOpacity onPress={() => BottomSheetContainerRef.current.open()}>
                    <Text style={[FONTS.h4, commonStyles.textFamily700, { color: COLORS.primary }]}>{monthList[monthIndex] ?? monthList[4]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => BottomSheetContainerYearRef.current.open()}>
                    <Text style={[FONTS.h4, commonStyles.textFamily700, { color: COLORS.primary }]}>{", " + listOfYear[yearIndex] ?? listOfYear[0]}</Text>
                </TouchableOpacity>
            </View>
            {monthIndex !== monthList.length - 1 && <ButtonHandler onPressCB={() => upwardBackWardHandler('upward')}>
                <AntDesign name={'rightcircle'} size={genericRatio(15)} color={"#c0bbc9"} />
            </ButtonHandler>}

            <BottomSheetContainer ref={BottomSheetContainerRef}>
                <ScrollView style={[commonStyles.fillFullScreen]}>
                    <View style={[commonStyles.center, commonStyles.fillFullScreen]}>
                        <Text style={[FONTS.h3, commonStyles.textFamily300]}>{'Select Month'}</Text>
                    </View>
                    <View style={[commonStyles.rowDirection, { flexWrap: 'wrap' }]}>
                        {monthList.map((val, index) => <View key={index} style={[index !== 0 && { marginLeft: 10 }]}>
                            <ActiveNonActItem key={index} data={val} title={val}
                                onPressCB={ItemHandler} index={index}
                                marginTop={10} selectedBool={monthIndex == index}
                            />
                        </View>)}
                    </View>
                </ScrollView>
            </BottomSheetContainer>
            <BottomSheetContainer ref={BottomSheetContainerYearRef}>
                <ScrollView style={[commonStyles.fillFullScreen]}>
                    <View style={[commonStyles.center, commonStyles.fillFullScreen]}>
                        <Text style={[FONTS.h3, commonStyles.textFamily300]}>{'Select Year'}</Text>
                    </View>
                    <View style={[commonStyles.rowDirection, { flexWrap: 'wrap' }]}>
                        {listOfYear.map((val, index) => <View key={index} style={[index !== 0 && { marginLeft: 10 }]}>
                            <ActiveNonActItem key={index} data={val} title={val}
                                onPressCB={ItemHandlerYear} index={index}
                                marginTop={10} selectedBool={yearIndex == index}
                            />
                        </View>)}
                    </View>
                </ScrollView>
            </BottomSheetContainer>
        </View>
    )
}

export default memo(CalenderMonthWithYear)

const styles = StyleSheet.create({})