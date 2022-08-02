import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AuthWelcomeScreen,
  LoginScreen,
  RegisterScreen,
} from '../screens/auth/view';

const Stack = createNativeStackNavigator();
export default function AuthRouter() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        gestureDirection: 'horizontal',
        animation: 'slide_from_right',
      }}
      initialRouteName="welcome">
      <Stack.Screen name="welcome" component={AuthWelcomeScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
