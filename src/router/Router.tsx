import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import MainRouter from './MainRouter';
export default function Router() {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide({fade: true})}>
      <MainRouter />
    </NavigationContainer>
  );
}
