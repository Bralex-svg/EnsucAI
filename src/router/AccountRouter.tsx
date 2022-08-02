import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AccountScreen} from '../screens/account/view';

const Stack = createNativeStackNavigator();
export default function AccountRouter() {
  return (
    <Stack.Navigator
      initialRouteName="account"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_left',
        gestureDirection: 'horizontal',
        gestureEnabled: true,
      }}>
      <Stack.Screen name="account" component={AccountScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
