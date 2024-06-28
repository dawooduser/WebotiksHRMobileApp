import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { authScreen } from '../../screens';
import CustomBottomBar from './CustomBottomBar';
import Example from './example'
const Tab = createBottomTabNavigator();
const { Home, Leaves,Profile,
    Notification, } = authScreen

function MyTabs() {
    return (
        <Tab.Navigator 
        screenOptions={{  }}
        // tabBar={props => <CustomBottomBar {...props} />}
        >
            <Tab.Screen name={"HomeScreen"} component={Home} />
            <Tab.Screen name={"Leaves"} component={Leaves} />
            <Tab.Screen name={"Notification"} component={Notification} />
            <Tab.Screen name={"Profile"} component={Profile} />
        </Tab.Navigator>
    );
}
export default Example