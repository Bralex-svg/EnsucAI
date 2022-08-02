import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import React, {ReactNode} from 'react';
import {getHeight, getWidth} from '../utils';
import {colors} from 'react-native-elements';

interface IProps {
  props?: TouchableOpacityProps;
  bgcolor?: string;
  children: ReactNode;
  handlePress?: () => void;
}
export default function CustomButton({
  handlePress,
  props,
  bgcolor,
  children,
}: IProps) {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        ...styles.root,
        backgroundColor: bgcolor ? bgcolor : colors.black,
      }}
      {...props}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: getHeight(5),
    height: getHeight(50),
    borderRadius: getWidth(10),
  },
});
