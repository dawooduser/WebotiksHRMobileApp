import { Platform, StyleSheet, Text, View } from 'react-native'
import React, { forwardRef, useCallback, useImperativeHandle, useRef } from 'react'
import ActionSheet from 'react-native-actionsheet'
import { request, PERMISSIONS } from 'react-native-permissions';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

const BottomSheetCameraPicker = forwardRef(({ _gettingImage }, ref) => {
    const ActionSheetRef = useRef(null)
    const CANCEL_INDEX = 0
    const DESTRUCTIVE_INDEX = 4
    const options = ['Cancel', 'Camera', 'Gallery']

    const openCamera = (cb) => {
        const _platform = Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA
        request(_platform).then((result) => {
            console.log(result)
            if (result === "granted") {
                let options = {
                    includeBase64: true,
                    quality: 0.5,
                    maxWidth: 400,
                    maxHeight: 400,
                    storageOptions: {
                        skipBackup: true,
                        path: 'images',
                    },
                };
                launchCamera(options, (response) => {
                    console.log('Response = ', response);

                    if (response.didCancel) {
                        console.log('User cancelled image picker');
                    } else if (response.error) {
                        console.log('ImagePicker Error: ', response.error);
                    } else if (response.customButton) {
                        console.log('User tapped custom button: ', response.customButton);
                        console.log(response.customButton);
                    } else {
                        const image = response.assets[0]
                        cb(image);
                    }
                });
            }
        });
    }

    const pickImageFromGallery = (cb) => {
        let options = {
            mediaType: 'photo',
            includeBase64: true,
            quality: 0.5,
            maxWidth: 400,
            maxHeight: 400,
        };
        launchImageLibrary(options, (response) => {

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                console.log(response.customButton);
            } else {
                const source = { uri: response.uri };
                // console.log('response', JSON.stringify(response));
                const image = response.assets[0]
                cb(image);
            }
        });
    };

    const sheetOnPressItem = useCallback((index) => {
        if (options[index] === "Camera") {
            openCamera(image => _gettingImage(image))

        } else if (options[index] === "Gallery") {
            pickImageFromGallery(image => _gettingImage(image))
        }
    }, [])

    useImperativeHandle(ref, () => ({
        openSheet: () => ActionSheetRef.current?.show(),
    }), [])

    return (
        <ActionSheet
            ref={(o) => ActionSheetRef.current = o}
            title={'Which one do you like ?'}
            options={options}
            cancelButtonIndex={CANCEL_INDEX}
            destructiveButtonIndex={DESTRUCTIVE_INDEX}
            onPress={sheetOnPressItem}
        />
    )
})

export default BottomSheetCameraPicker

const styles = StyleSheet.create({})