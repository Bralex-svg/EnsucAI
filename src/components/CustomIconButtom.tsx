import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React, {ReactNode} from 'react';
import {} from 'react-native-vector-icons';
import {Icon} from 'react-native-vector-icons/Icon';

interface IProps {
  Icon: ReactNode;
  handlePress?: () => void;
  props?: TouchableOpacityProps;
}
export default function CustomIconButtom({Icon, handlePress, props}: IProps) {
  return (
    <TouchableOpacity onPress={handlePress} {...props}>
      {Icon}
    </TouchableOpacity>
  );
}
