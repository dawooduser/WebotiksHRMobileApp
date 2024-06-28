import React, { memo } from 'react';
import {
    Alert,
    Animated,
    StyleSheet,
    TouchableOpacity,
    View, Image,
} from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { authScreen } from '../../screens';
import { genericRatio } from '../../helper/helper';
import { NavigationIcon } from '../../constant/images';
import { COLORS } from '../../constant/theme';
import { AntDesign } from '../../constant/icon';

const { Home, Leaves, Profile,
    Notification, } = authScreen

const Screen1 = () => {
    return <View style={styles.screen1} />;
};

const Screen2 = () => {
    return <View style={styles.screen2} />;
};

function App() {
    const _renderIcon = (routeName, selectedTab) => {
        return (
            <Image
                source={routeName === "Home" ? NavigationIcon.home : routeName === "Leaves" ? NavigationIcon.leave : routeName === "Notification" ? NavigationIcon.notification : routeName === "Profile" ? NavigationIcon.profile : NavigationIcon.profile}
                style={styles.iconSize}
                tintColor={routeName === selectedTab ? COLORS.primary : '#9ca3af'}
            />
        );
    };
    const renderTabBar = ({ routeName, selectedTab, navigate }) => {
        return (
            <TouchableOpacity
                onPress={() => navigate(routeName)}
                style={styles.tabbarItem}
            >
                {_renderIcon(routeName, selectedTab)}
            </TouchableOpacity>
        );
    };

    return (
        <CurvedBottomBar.Navigator
            type="DOWN"
            style={styles.bottomBar}
            shadowStyle={styles.shawdow}
            height={55}
            circleWidth={50}
            bgColor="white"
            initialRouteName="title1"
            screenOptions={{ headerShown: false }}
            borderTopLeftRight
            renderCircle={({ selectedTab, navigate }) => (
                <Animated.View style={styles.btnCircleUp}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => Alert.alert('Click Action')}
                    >
                        <AntDesign name={'plus'} color={COLORS.white} size={25} />
                    </TouchableOpacity>
                </Animated.View>
            )}
            tabBar={renderTabBar}
        >
            <CurvedBottomBar.Screen
                name="Home"
                position="LEFT"
                component={() => <Home />}
            />
            <CurvedBottomBar.Screen
                name="Leaves"
                position="LEFT"
                component={() => <Leaves />}
            />
            <CurvedBottomBar.Screen
                name="Notification"
                component={() => <Notification />}
                position="RIGHT"
            />
            <CurvedBottomBar.Screen
                name="Profile"
                component={() => <Profile />}
                position="RIGHT"
            />
        </CurvedBottomBar.Navigator>
    );
}

export default memo(App)

export const styles = StyleSheet.create({
    iconSize: {
        height: genericRatio(20),
        width: genericRatio(20)
    },
    container: {
        flex: 1,
        padding: 20,
    },
    shawdow: {
        shadowColor: '#DDDDDD',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
    },
    bottomBar: {},
    btnCircleUp: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        bottom: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 1,
    },
    imgCircle: {
        width: 30,
        height: 30,
        tintColor: 'gray',
    },
    tabbarItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 30,
        height: 30,
    },
    screen1: {
        flex: 1,
        backgroundColor: '#BFEFFF',
    },
    screen2: {
        flex: 1,
        backgroundColor: '#FFEBCD',
    },
});
