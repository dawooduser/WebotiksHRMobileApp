import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { COLORS, commonStyles } from '../../constant/theme'
import { ActivitiesHomewidgets, CheckInLocation, GreetingHome, PaymentSchedual, VerticalSpace } from '../../components'
import { useSelector } from 'react-redux'

const Home = () => {
   
    return (
        <SafeAreaView style={[commonStyles.fillFullScreen, styles.container]}>
            <ScrollView style={[commonStyles.fillFullScreen]}>
                <GreetingHome />
                <CheckInLocation />
                <VerticalSpace />
                <ActivitiesHomewidgets />
                <VerticalSpace />
                <PaymentSchedual />
                <VerticalSpace />
                <VerticalSpace />
                <VerticalSpace />
                <VerticalSpace />
                <VerticalSpace />
                <VerticalSpace />
                <VerticalSpace />
                <VerticalSpace />
                <VerticalSpace />
            </ScrollView>
        </SafeAreaView>
    )
}

export default memo(Home)

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2'
    }
})