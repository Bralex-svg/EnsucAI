import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeRouter from './HomeRouter';
import AuthRouter from './AuthRouter';
import DashboardRouter from './DashboardRouter';
import AccountRouter from './AccountRouter';

const Stack = createNativeStackNavigator();
export default function MainRouter() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        gestureDirection: 'horizontal',
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="home" component={HomeRouter} />
      <Stack.Screen name="auth" component={AuthRouter} />
      <Stack.Screen name="dashboard_stack" component={DashboardRouter} />
      <Stack.Screen name="account_stack" component={AccountRouter} />
    </Stack.Navigator>
  );
}
