import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { COLORS, commonStyles } from '../../constant/theme'
import { Header, ItemProfiles, ProfileImageEmailSection, VerticalSpace } from '../../components'
import { Ionicons } from '../../constant/icon'
import { genericRatio, hardScreenNavigation, screenNavigation } from '../../helper/helper'
import { SettingIcon, archiveTick, clipboardText, logoutIcon } from '../../constant/images'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/reducers/user'
import { useNavigation } from '@react-navigation/native'

const Profile = ({}) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const naviScreen = (screen, data = {}) => screenNavigation(navigation, screen, { data });
    const logoutHandler = () => {
        dispatch(logout());
        hardScreenNavigation(navigation, "Login")
    }
    return (
        <SafeAreaView style={[commonStyles.fillFullScreen, styles.container]}>
            <ScrollView style={[commonStyles.fillFullScreen]}>
                <Header centerText={'My Profile'} />

                <ProfileImageEmailSection />
                <VerticalSpace container={{ marginVertical: 20 }} />
                <View style={[commonStyles.fullWidth, commonStyles.screenCommonPaddingHorizontal]}>
                    <ItemProfiles
                        title={'Personal Details'} cb={() => naviScreen("ProfileDetail")}
                        imageIconView={<Ionicons name={'person-outline'} color={'#8b97a8'} size={genericRatio(20)} />}
                    />
                    <VerticalSpace />
                    <ItemProfiles
                        title={'Settings'} cb={() => naviScreen("ProfileDetail")}
                        imageIconView={<Image source={SettingIcon} style={{height: genericRatio(20), width: genericRatio(20)}} />}
                    />
                    <VerticalSpace />
                    <ItemProfiles
                        title={'Terms of Conditions'} cb={() => naviScreen("ProfileDetail")}
                        imageIconView={<Image source={clipboardText} style={{height: genericRatio(20), width: genericRatio(20)}} />}
                    />
                    <VerticalSpace />
                    <ItemProfiles
                        title={'Privacy Policy'} cb={() => naviScreen("ProfileDetail")}
                        imageIconView={<Image source={archiveTick} style={{height: genericRatio(20), width: genericRatio(20)}} />}
                    />
                    <VerticalSpace />
                    <ItemProfiles
                        title={'Logout'} cb={logoutHandler}
                        imageIconView={<Image source={logoutIcon} style={{height: genericRatio(20), width: genericRatio(20)}} />}
                    />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.secondary
    }
})