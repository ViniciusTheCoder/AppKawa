import Login from "./screens/login";
import Register from "./screens/register"
import Register_Customer from "./screens/register_customer";
import GreenIT from "./screens/greenit";
import Events_List from "./screens/events_list";
import GreenIT_Request from "./screens/greenit_request";
import Home from "./screens/home";
import Home_Customer from "./screens/home_customer";

import { useState, useEffect, useRef } from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications'
import Events_Creator from "./screens/events_creator";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

function App(){
const Stack = createNativeStackNavigator();

const [expoPushToken, setExpoPushToken] = useState('');
const [notification, setNotification] = useState(false);
const notificationListener = useRef();
const responseListener = useRef();

useEffect(() => {
  registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

  notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
    setNotification(notification);
  });

  responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
    console.log(response);
  });

  return () => {
    Notifications.removeNotificationSubscription(notificationListener.current);
    Notifications.removeNotificationSubscription(responseListener.current);
  };
}, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name='Login' options={{ headerShown: false }} component={Login}/>
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Register_Customer' options={{ headerShown: false }}  component={Register_Customer} />
        <Stack.Screen name='GreenIT' options={{ headerShown: false }}  component={GreenIT} />
        <Stack.Screen name='Events_List' options={{ headerShown: false }}  component={Events_List} />
        <Stack.Screen name='Events_Creator' options={{ headerShown: false }}  component={Events_Creator} />
        <Stack.Screen name='GreenIT_Request' options={{ headerShown: false }}  component={GreenIT_Request} />
        <Stack.Screen name='Home' options={{ headerShown: false }}  component={Home} />
        <Stack.Screen name='Home_Customer' options={{ headerShown: false }}  component={Home_Customer} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync({ projectId: 'd557d379-a580-46fc-8a1d-dc6ce22bf05f' })).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}