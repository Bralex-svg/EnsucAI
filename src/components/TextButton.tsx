import React, {ReactNode} from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {TextProps} from 'react-native-elements';
import {getHeight} from '../utils';

interface IProps {
  handlePress?: () => void;
  text: string;
  props?: TouchableOpacityProps;
  textColor?: string;
  textSize?: number;
  textProps?: TextProps;
}
export default function TextButton({
  handlePress,
  text,
  props,
  textColor,
  textSize,
  textProps,
}: IProps) {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        padding: getHeight(4),
        alignSelf: 'center',
      }}
      {...props}>
      <Text
        style={{
          color: textColor ? textColor : '#ffff',
          fontSize: textSize ? textSize : getHeight(14),
        }}
        {...textProps}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
