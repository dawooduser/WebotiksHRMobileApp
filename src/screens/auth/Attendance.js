import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, commonStyles } from '../../constant/theme'
import { EmptyListPlaceholder, Header, HorizontalSpace, ItemSeparatorLine, VerticalSpace } from '../../components'
import { settingContainer } from '../../constant/images'

const Attendance = () => {
    const [attendanceStates, setAttendanceStates] = useState({
        data: ['1', '1', '2', '2', '1', '1', '2', '2', '1', '1', '2', '2']
    })
    const renderItem = ({ index, item }) => (
        <View key={index} style={[commonStyles.fullWidth, commonStyles.screenCommonPaddingHorizontal]}>
            <View style={[styles.itemContainer, commonStyles.rowDirectionCenter, commonStyles.shadow]}>
                <View style={styles.lineContainer} />
                {/* <HorizontalSpace /> */}
                <View style={[commonStyles.fillFullScreen, {paddingHorizontal: 15}]}>
                    <View style={[commonStyles.rowDirectionCenter, commonStyles.spaceBetween]}>
                        <View>
                            <Text style={[commonStyles.textColorBlack, FONTS.body5, commonStyles.textFamily300]} >{"Date"}</Text>
                            <Text style={[commonStyles.textColorBlack, FONTS.body4, commonStyles.textFamily500]} >{"May 01, 2023"}</Text>
                        </View>
                        <View>
                            <Text style={[commonStyles.textColorBlack, FONTS.body5, commonStyles.textFamily300]} >{"Day Type"}</Text>
                            <View style={[commonStyles.center, styles.dayTypeContainer]}>
                                <Text style={[commonStyles.textFamily500, FONTS.body4, { color: "#F38B00" }]}>{"Leave"}</Text>
                            </View>

                        </View>
                    </View>
                    <VerticalSpace />
                    <View style={[commonStyles.rowDirectionCenter, commonStyles.spaceBetween]}>
                        <View>
                            <Text style={[commonStyles.textColorBlack, FONTS.body5, commonStyles.textFamily300]} >{"Worked Hour"}</Text>
                            <Text style={[commonStyles.textColorBlack, FONTS.body4, commonStyles.textFamily500]} >{"7h 33m"}</Text>
                        </View>
                        <View>
                            <Text style={[commonStyles.textColorBlack, FONTS.body5, commonStyles.textFamily300]} >{"Check In"}</Text>
                            <Text style={[commonStyles.textColorBlack, FONTS.body4, commonStyles.textFamily500]} >{"10:01"}</Text>
                        </View>
                        <View>
                            <Text style={[commonStyles.textColorBlack, FONTS.body5, commonStyles.textFamily300]} >{"Check Out"}</Text>
                            <Text style={[commonStyles.textColorBlack, FONTS.body4, commonStyles.textFamily500]} >{"17:34"}</Text>
                        </View>
                    </View>

                </View>
            </View>
        </View>
    );
    return (
        <SafeAreaView style={[commonStyles.fillFullScreen, styles.container]}>
            <Header backVisible centerText={'Apply Leave'}
                rightCompontVisible={true}
                rightCompont={<TouchableOpacity>
                    <Image source={settingContainer} style={{ height: 24, width: 24 }} />
                </TouchableOpacity>} />
            <VerticalSpace container={{ marginVertical: 20 }} />
            <FlatList
                data={attendanceStates.data}
                keyExtractor={(index, item) => index}
                renderItem={renderItem}
                ItemSeparatorComponent={<View style={[commonStyles.fullWidth, {height: 5}]} />}
                ListEmptyComponent={<EmptyListPlaceholder />}
            />



        </SafeAreaView>
    )
}

export default Attendance

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.secondary
    },
    itemContainer: {
        borderRadius: 10,
        paddingVertical: 10,
        backgroundColor: COLORS.white
    },
    lineContainer: { backgroundColor: '#F38B00', height: '70%', width: 4, borderRadius: 10 },
    dayTypeContainer: { borderWidth: 1, borderColor: "#F38B00", borderRadius: 8, paddingHorizontal: 2 }
})