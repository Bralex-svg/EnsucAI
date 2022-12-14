import {View, Text, StyleSheetProperties, TextProps} from 'react-native';
import React, {ReactNode} from 'react';
import {getHeight, getWidth} from '../utils';

interface IProps {
  fontsize?: number;
  children: string;
  props?: TextProps;
}
export default function BigText({fontsize, children, props}: IProps) {
  return (
    <Text
      style={{
        fontSize: fontsize ? fontsize : getHeight(18),
        textAlign: 'center',
        padding: getWidth(2),
        fontWeight: 'bold',
      }}
      {...props}>
      {children}
    </Text>
  );
}
