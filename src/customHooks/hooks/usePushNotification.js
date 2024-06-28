import { useDispatch } from "react-redux";
import { showToastMsg } from "../../helper/helper";
import { useNavigation } from "@react-navigation/native";
import { Platform } from 'react-native';
import {request, PERMISSIONS} from 'react-native-permissions';
import PushNotification, {Importance} from 'react-native-push-notification';
import { useHttp } from "..";
import { useEffect } from "react";
import messaging from '@react-native-firebase/messaging';

const usePushNotification = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const {firebaseRefreshTokenToServer} = useHttp()
    
    const requestUserPermission = async () => {
      if (Platform.OS === 'ios') {
        //Request iOS permission
        const authStatus = await messaging().requestPermission();
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
      } else if (Platform.OS === 'android') {
        
        try {
          const granted = await request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS)
          if (granted === "granted") {
            
          } else {
          }
        } catch (err) {
         
        }
      }
    }
  
    const getFCMToken = async () => {
      const fcmToken = await messaging().getToken();
      if (fcmToken) {
        console.log({fcmToken})
        // firebaseRefreshTokenToServer({FirebaseToken: fcmToken}, (response) => {
        //   if (response.data.StatusCode === 201 || response.data.Status === false || response === null) return;
        //   console.log(response?.data?.Message || 'success')
        // })
      }
    };
  
    const listenToForegroundNotifications = async () => {
      const unsubscribe = messaging().onMessage(async remoteMessage => {
        
        renderNotification(remoteMessage)
      });
      return unsubscribe;
    }
  
    const listenToBackgroundNotifications = async () => {
      const unsubscribe = messaging().setBackgroundMessageHandler(
        async remoteMessage => {
          renderNotification(remoteMessage)
        },
      );
      return unsubscribe;
    }
  
    const onNotificationOpenedAppFromBackground = async () => {
      const unsubscribe = messaging().onNotificationOpenedApp(
        async remoteMessage => {
          console.log(
            'App opened from BACKGROUND by tapping notification:',
            JSON.stringify(remoteMessage),
          );
          renderNotification(remoteMessage)
        },
      );
      return unsubscribe;
    };
  
    const onNotificationOpenedAppFromQuit = async () => {
      const message = await messaging().getInitialNotification();
  
      if (message) {
        console.log('App opened from QUIT by tapping notification:', JSON.stringify(message));
      }
    };
  
    const androidNotificatonSetup = () => {
      try {
  
        PushNotification.createChannel({
            channelId: 'channel-id-1',
            channelName: 'My channel',
            channelDescription: 'Notifications channel',
            soundName: 'opening_message_tone.mp3',
            importance: 4,
            vibrate: true,
            importance: Importance.HIGH,
            priority: "high",
          });
      } catch (error) {
        showToastMsg('info', error?.message || 'Something went wrong');
      }
    }
    const renderNotification = remoteMessage => {
        PushNotification.localNotification({
          message: remoteMessage.notification.body,
          title: remoteMessage.notification.title,
          // bigPictureUrl: remoteMessage.notification.android.imageUrl,
          // smallIcon: remoteMessage.notification.android.imageUrl,
          channelId: 'channel-id-1',
        });
    }
  
    useEffect(() => {
      if (Platform.OS === "android") {
        androidNotificatonSetup()
      }
      PushNotification.configure({
        onNotification: function (notification) {
          if (notification.userInteraction) {
            // Handle notification click
  
           
          }
        },
      });
    }, [])
  
  
    return {
      requestUserPermission,
      getFCMToken,
      listenToForegroundNotifications,
      listenToBackgroundNotifications,
      onNotificationOpenedAppFromBackground,
      onNotificationOpenedAppFromQuit,
    };
  };
  
  export default usePushNotification;