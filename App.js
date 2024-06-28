import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StackNavigation from './src/navigation/stackNavigation'
import store, { persistor } from './src/redux/reduxStore/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { LazyLoader, NetworkConnection } from './src/components';
import Toast from 'react-native-toast-message';
import SystemDateContext from './src/customHooks/hooks/useSystemStandardTime';


const App = () => {
  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SystemDateContext>
        <StackNavigation />
      </SystemDateContext>
      <LazyLoader />
      <Toast />
      <NetworkConnection />
    </PersistGate>
  </Provider>
}

export default App

const styles = StyleSheet.create({})