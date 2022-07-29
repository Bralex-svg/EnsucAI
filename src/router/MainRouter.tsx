import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeRouter from './HomeRouter';
import {AuthWelcomeScreen} from '../screens/auth/view';
import AuthRouter from './AuthRouter';

const Stack = createNativeStackNavigator();
export default function MainRouter() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        gestureDirection: 'horizontal',
      }}>
      <Stack.Screen name="home" component={HomeRouter} />
      <Stack.Screen name="auth" component={AuthRouter} />
    </Stack.Navigator>
  );
}
