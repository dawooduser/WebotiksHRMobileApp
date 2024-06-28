import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { memo, useCallback, useMemo } from 'react'
import { AntDesign } from '../../constant/icon'
import { genericRatio } from '../../helper/helper'
import { COLORS, commonStyles } from '../../constant/theme'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../../redux/reducers/addFav'

const FavButton = ({product, iconSize = genericRatio(18), containerRatio = genericRatio(33)}) => {
    // const dispatch = useDispatch()
    // const FavList = useSelector(x => x.favData.data)
    // const Selected = useMemo(() => {
    //     const checkData = FavList.find(x=> x.ProductId === product.ProductId)
    //     return !checkData ? false : true
    // }, [FavList])

    // const handlerCB = useCallback(() => {
        
    //     if (Selected) {
    //         dispatch(removeItem(product))
    //         return;
    //     }
    //     dispatch(addItem(product))
    // }, [Selected])
    return (
        <TouchableOpacity style={[styles.heartIconContainer, commonStyles.center, 
            {height: containerRatio, width: containerRatio, 
            borderRadius: containerRatio,}]} >
            <AntDesign name={Selected ? "heart" : "hearto"} size={iconSize} color={Selected ? COLORS.primary : '#9CA3AF'} />
        </TouchableOpacity>
    )
}

export default memo(FavButton)

const styles = StyleSheet.create({
    heartIconContainer: {
        height: genericRatio(33), width: genericRatio(33), 
        borderRadius: genericRatio(33),
        backgroundColor: '#FFFFFF'
    }
})