import { StyleSheet, Text, View } from 'react-native'
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import RBSheet from 'react-native-raw-bottom-sheet';
import { commonStyles } from '../../constant/theme';
import { genericRatio } from '../../helper/helper';

const BottomSheetContainer = forwardRef(({ children, bottomSheetHeight = genericRatio(200) }, ref) => {
    const refRBSheet = useRef();
    useImperativeHandle(ref, () => ({
        open: () => refRBSheet.current.open(),
        close: () => refRBSheet.current.close(),
    }), [])
    return (
        <RBSheet ref={refRBSheet} height={bottomSheetHeight}
            customStyles={{
                wrapper: {
                    // backgroundColor: 'transparent',
                },
                //   draggableIcon: {
                //     backgroundColor: '#000',
                //   },
            }}
            customModalProps={{
                // animationType: 'slide',
                statusBarTranslucent: true,
            }}
            customAvoidingViewProps={{
                enabled: false,
            }}>
            <View style={[commonStyles.fillFullScreen, {padding: 10}]}>
                {children}
            </View>
        </RBSheet>
    )
})

export default BottomSheetContainer

const styles = StyleSheet.create({})