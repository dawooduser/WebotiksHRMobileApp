import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { memo, useState } from 'react'
import EmptyListPlaceholder from '../EmptyListPlaceholder'
import { FONTS, commonStyles } from '../../../constant/theme'

const YearListView = () => {
    const [yearListViewState, setYearListViewState] = useState({
        data: []
    })
    const renderItem = ({ index, item }) => (
        <View key={index} style={[commonStyles.fullWidth, commonStyles.rowDirectionCenter, styles.itemContainer, commonStyles.center, commonStyles.spaceBetween, commonStyles.shadow]}>
            <Text style={[FONTS.body4, commonStyles.textFamily500, {color: '#004976'}]}>{"non"}</Text>
        </View>
    );

    return <FlatList
        data={yearListViewState.data}
        scrollEnabled={false}
        keyExtractor={(index, item) => index}
        renderItem={renderItem}
        ListEmptyComponent={<EmptyListPlaceholder />}
    />
}

export default memo(YearListView)

const styles = StyleSheet.create({})