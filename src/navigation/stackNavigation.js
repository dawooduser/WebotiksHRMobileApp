import React, { Suspense, useEffect, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { nonAuthScreen, authScreen } from '../screens'
import { hide } from '../redux/reducers/spinner';
import MyTabs from './BottomNavigation';

const { Login } = nonAuthScreen
const { ApplyforLoan, Loan, PaySlip, ApplyforLeave, Attendance,  TeamMember, AttandanceList } = authScreen

const Stack = createNativeStackNavigator();

function App() {
  const spinnerVisibilty = useSelector(x => x.spinner.visible)
  const checkAuth = useSelector(x => x.user.auth)

  const dispatch = useDispatch()
  useEffect(() => {
    if (spinnerVisibilty) dispatch(hide())
  }, [])

  const initialRoute = useMemo(() => checkAuth ? "MyTabs" : "SplashScreen", [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          lazy: false
        }}
        // initialRouteName='WaitingForPayment'
        initialRouteName={checkAuth ? "MyTabs" : "Login"}
      >
        <Stack.Screen name="ApplyforLoan" component={ApplyforLoan} />
        <Stack.Screen name="Loan" component={Loan} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="PaySlip" component={PaySlip} />
        <Stack.Screen name="AttandanceList" component={AttandanceList} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TeamMember" component={TeamMember} />
        <Stack.Screen name="ApplyforLeave" component={ApplyforLeave} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;