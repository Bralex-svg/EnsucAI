import {View, Text} from 'react-native';
import React from 'react';
import {getHeight, getWidth} from '../utils';

interface IProps {
  height?: number;
  width?: number;
}
export default function SizedBox({width, height}: IProps) {
  return (
    <View
      style={{
        marginVertical: height ? height : 0,
        marginHorizontal: width ? width : 0,
      }}
    />
  );
}
