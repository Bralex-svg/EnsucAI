import {View, Text, TextProps} from 'react-native';
import React, {ReactNode} from 'react';
import {getHeight, getWidth} from '../utils';

interface IProps {
  fontsize?: number;
  children: string | ReactNode;
  props?: TextProps;
}
export default function SmallText({fontsize, children, props}: IProps) {
  return (
    <Text
      style={{
        fontSize: fontsize ? fontsize : getHeight(16),
        textAlign: 'center',
        padding: getWidth(2),
      }}
      {...props}>
      {children}
    </Text>
  );
}
