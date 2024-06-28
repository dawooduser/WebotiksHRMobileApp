import React, { memo, useEffect } from "react";
import {useNetInfo, NetInfoState} from "@react-native-community/netinfo";
import {View, StyleSheet} from "react-native";
import Snackbar from 'react-native-snackbar';
import { COLORS } from "../../constant/theme";

const NetworkConnection = () => {
    const internetState = useNetInfo();

    useEffect(() => {
        if (internetState.isConnected === false) {
            return Snackbar.show({
                text: 'Network connection is unavailable',
                duration: Snackbar.LENGTH_INDEFINITE,
                // action: {
                //     text: 'RETRY',
                //     textColor: 'green',
                //     onPress: () => {},
                // },
            })
        }
        Snackbar.show({
            text: 'Network connection now available',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: COLORS.primary,
            textColor: COLORS.white,
        })
    }, [internetState.isConnected])

    return null
};
const styles = StyleSheet.create({
    centered: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
});


export default memo(NetworkConnection);
