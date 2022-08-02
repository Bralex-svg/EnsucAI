import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ChatScreen,
  DashboardScreen,
  DroneControlScreen,
  HistoryScreen,
  LiveRecordScreen,
} from '../screens/dashboard/view';

const Stack = createNativeStackNavigator();
export default function DashboardRouter() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        gestureDirection: 'horizontal',
        gestureEnabled: true,
      }}
      initialRouteName="dashboard">
      <Stack.Screen name="dashboard" component={DashboardScreen} />
      <Stack.Screen name="live_record" component={LiveRecordScreen} />
      <Stack.Screen name="drone_control" component={DroneControlScreen} />
      <Stack.Screen name="history" component={HistoryScreen} />
      <Stack.Screen name="chat" component={ChatScreen} />
    </Stack.Navigator>
  );
}
