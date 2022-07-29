import {View, Text} from 'react-native';
import React from 'react';

interface IProps {
  flex?: number;
}
export default function Expanded({flex}: IProps) {
  return <View style={{flex: flex ? flex : 1}} />;
}
