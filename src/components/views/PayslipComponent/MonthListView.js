import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { memo, useState } from 'react'
import { COLORS, FONTS, commonStyles } from '../../../constant/theme';
import HorizontalSpace from '../HorizontalSpace';
import EmptyListPlaceholder from '../EmptyListPlaceholder';

const MonthListView = () => {
    const [monthListViewStates, setMonthListViewStates] = useState({
        data: ['1']
    })
    const renderItem = ({ index, item }) => (
        <View key={index} style={[commonStyles.fullWidth, commonStyles.rowDirectionCenter, styles.itemContainer, commonStyles.center, commonStyles.spaceBetween, commonStyles.shadow]}>
            <View style={[commonStyles.rowDirection]}>
                <View style={{backgroundColor: '#F38B00', height: 'auto', width: 5, borderRadius: 10}} />
                <HorizontalSpace />
                <View>
                    <Text style={[FONTS.body5, commonStyles.textFamily300, {color: COLORS.commonColor}]}>{"Salary of April"}</Text>
                    <Text style={[FONTS.body4, commonStyles.textFamily500, commonStyles.textColorBlack]}>{"May 01, 2023 "}</Text>
                    <Text style={[FONTS.body4, commonStyles.textFamily500, commonStyles.textColorBlack]}>{"April 01, 2023"}</Text>
                </View>
            </View>
            <Text style={[FONTS.body4, commonStyles.textFamily500, {color: '#004976'}]}>{"PKR 25100"}</Text>
        </View>
    );
    return <FlatList
        data={monthListViewStates.data}
        scrollEnabled={false}
        keyExtractor={(index, item) => index}
        renderItem={renderItem}
        ListEmptyComponent={<EmptyListPlaceholder />}

    />
}

export default memo(MonthListView)

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: COLORS.white,
        paddingVertical: 10
    }
})