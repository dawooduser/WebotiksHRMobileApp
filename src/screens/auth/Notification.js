import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { COLORS, FONTS, commonStyles } from '../../constant/theme'
import { Header, NotificationItem, VerticalSpace } from '../../components'

const Notification = () => {
    return (
        <SafeAreaView style={[commonStyles.fillFullScreen, styles.container]}>
            <ScrollView style={[commonStyles.fillFullScreen]}>
                <Header centerText={'Notifications'} />
                <View style={[commonStyles.fullWidth, commonStyles.screenCommonPaddingHorizontal]}>
                    <Text style={[commonStyles.textFamily500, FONTS.body4, commonStyles.textColorBlack]}>{"Today"}</Text>
                    <NotificationItem />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Notification

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.secondary
    }
})