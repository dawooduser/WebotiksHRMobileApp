import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { COLORS, FONTS, SIZES, commonStyles } from '../../constant/theme'
import { BottomButtonModel, HorizontalSpace, TextInputLogin, TextInputTitle, TextInputWithTitle, VerticalSpace } from '../../components'
import { useDispatch } from 'react-redux'
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics'
import { ValidateEmail, genericRatio, hardScreenNavigation, screenNavigation, showToastMsg } from '../../helper/helper'
import AppLogoView from '../../components/views/AppLogoView'
import { FontAwesome5 } from '../../constant/icon'
import { useHttp } from '../../customHooks'
import { login } from '../../redux/reducers/user'

const Login = ({navigation}) => {
    const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true });
    const [fields, setFields] = useState({
        email: 'employee1@gmail.com', password: 'rT@321',
        visiblePassword: true, checkBiometrics: false,
    });
    const dispatch = useDispatch();
    const { phoneLogin } = useHttp();

    const onChangeValue = useCallback((mode, text) => {
        setFields(prev => ({ ...prev, [mode]: text }))
    }, [fields]);

    useEffect(() => {
        rnBiometrics.isSensorAvailable().then(({ available }) => {
            onChangeValue('checkBiometrics', available)
        })
    }, [])

    const getDevicePublicKey = async () => {
        const { available } = await rnBiometrics.isSensorAvailable();
        if (available) {
            const { keysExist } = await rnBiometrics.biometricKeysExist();
            if (keysExist) {
                await rnBiometrics.deleteKeys();
            }
            const { publicKey } = await rnBiometrics.createKeys();
            console.log("getDevicePublicKey => data => ", { publicKey });
            // setPublicKey(publicKey)
        }
    }
    const BiomatricLogin = async () => {
        const timestamp = Math.round(new Date().getTime() / 1000,).toString();
        const payload = `${'77445511231321321213'}__${timestamp}`;
        try {

            const { success, signature } = await rnBiometrics.createSignature({ promptMessage: 'Sign in', payload, })
            console.log("login => ", { success, signature })
            if (!success) return console.warn('skip by user')

            console.log('------------------------------------------------------------')
            console.log('login => isVerified => ', { signature, payload })
            console.log('------------------------------------------------------------')


        } catch (err) {
            console.log('login => error => ', JSON.stringify(err))
        }
    }

    const loginHandler = useCallback(async () => {
        if (fields['email'] === "") {
            return showToastMsg('error', 'Please enter email address')
        }
        if (fields['password'] === "") {
            return showToastMsg('error', 'Please enter password')
        }
        if (!ValidateEmail(fields['email'])) {
            return showToastMsg('error', 'Please enter valid email address')
        }
        phoneLogin({ Email: fields['email'], Password: fields['password'] }, (response) => {
            if (response.data.StatusCode === 201 || response.data.Status === false) return;
            console.log(response.data)
            let storeObject = {}
            const { data = {} } = response
            const {Token = "", UserData = {}} = data
            storeObject['token'] = Token;
            storeObject['userData'] = UserData;
            storeObject["Total Absent"] = response?.data["Total Absent"] || '';
            storeObject['Total Present'] = response?.data["Total Present"] || '';
            dispatch(login({...storeObject}));
            hardScreenNavigation(navigation, "MyTabs");
        });

    }, [fields])

    const ShowEnableDisable = useMemo(() => fields['checkBiometrics'], [fields])
    const ShowEnableDisableColor = useMemo(() => fields['checkBiometrics'] ? COLORS.primary : COLORS.lightPrimaryColor, [fields])
    const textValuePassword = useMemo(() => fields['password'], [fields])
    const textValueEmail = useMemo(() => fields['email'], [fields])

    return (
        <SafeAreaView style={[commonStyles.fillFullScreen, styles.screen]}>
            <ScrollView style={[commonStyles.fillFullScreen]}>
                <View style={{ height: genericRatio(40), }} />
                <View style={[commonStyles.fullWidth, commonStyles.center]}>
                    <AppLogoView />
                    <VerticalSpace container={{ marginVertical: 15 }} />
                    <Text style={[FONTS.h1, styles.screenWelcomeNoteOne]}>{"Welcome Back"}</Text>
                    <VerticalSpace />
                    <Text style={[FONTS.body3, styles.screenWelcomeNoteTwo]}>{"Hello there, login to continue"}</Text>
                </View>
                <VerticalSpace container={{ marginVertical: 15 }} />
                <View style={[styles.restOfContainerWidth]}>

                    <TextInputTitle
                        fieldTitle={"Email Address"}
                        _keyboardType={'email-address'}
                        value={textValueEmail}
                        placeholderText={'Enter email address'}
                        getValueCB={(text) => console.log(text)}
                    />
                    <VerticalSpace />
                    <TextInputTitle
                        isPasswordFields={true}
                        fieldTitle={"Password"}
                        value={textValuePassword}
                        _keyboardType={'numeric'}
                        placeholderText={'Enter password'}
                        getValueCB={(text) => console.log(text)}
                    />


                    <VerticalSpace container={{ height: genericRatio(5) }} />
                    <View style={[commonStyles.fullWidth, { alignItems: 'flex-end' }]}>
                        <Text style={[FONTS.body4, commonStyles.textFamily300, { color: '#004976' }]}>{"Forgot Password ?"}</Text>
                    </View>
                    <VerticalSpace container={{ height: genericRatio(5) }} />

                    <BottomButtonModel title={'Sign In'} cb={loginHandler}
                        textStyle={[FONTS.body2, { color: COLORS.secondary, fontFamily: 'Inter-Medium' }]}
                        container={[commonStyles.fullWidth, styles.LoginButtonContainer]} />
                    {ShowEnableDisable && <>
                        <VerticalSpace />
                        <View style={[commonStyles.center]}>
                            <Text style={[FONTS.body3, { color: '#6B7280' }]}>{'OR'}</Text>
                        </View>

                        <VerticalSpace />

                        <TouchableOpacity
                            disabled={!ShowEnableDisable}
                            onPress={BiomatricLogin}
                            style={[commonStyles.rowDirectionCenter, styles.bioContainer, commonStyles.center]}>
                            <FontAwesome5 name="fingerprint" color={ShowEnableDisableColor} size={genericRatio(25)} />
                            <HorizontalSpace />
                            <Text style={[FONTS.body3, { color: '#6C6C6C' }]}>{'Sign In with Biometric'}</Text>
                        </TouchableOpacity>
                    </>
                    }
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    screen: {
        backgroundColor: COLORS.secondary
    },
    iconSize: { height: genericRatio(25), width: genericRatio(25), },
    screenWelcomeNoteOne: {
        color: '#101317',
        ...commonStyles.textFamily500
    },
    // screenWelcomeNoteTwo: {
    //     color: COLORS.lightGray7,
    //     fontFamily: 'Inter-Thin',
    //     fontWeight: 400,
    // },
    screenWelcomeNoteTwo: {
        color: '#999',
        ...commonStyles.textFamily300
    },
    restOfContainerWidth: {
        width: SIZES.width - 50,
        alignSelf: 'center'
    },
    LoginButtonContainer: {
        backgroundColor: COLORS.primary, borderRadius: 10
    },
    bioContainer: {
        borderColor: '#D6D6D6', borderWidth: 1,
        paddingVertical: 10,
        borderRadius: 8,
    }



})