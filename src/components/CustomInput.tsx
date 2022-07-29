import {StyleSheet, Text, View, TextInput, TextInputProps} from 'react-native';
import React, {ReactNode} from 'react';
import {getHeight, getWidth} from '../utils';
import RowContainer from './RowContainer';
import CustomIconButtom from './CustomIconButtom';

interface IProps {
  props?: TextInputProps;
  placeholder?: string;
  handleText?: (text: string) => void;
  child?: ReactNode;
}
export default function CustomInput({
  props,
  placeholder,
  handleText,
  child,
}: IProps) {
  return (
    <View style={styles.input_group}>
      <TextInput
        style={styles.input}
        onChangeText={handleText}
        placeholder={placeholder}
      />
      <CustomIconButtom Icon={child} />
    </View>
  );
}

const styles = StyleSheet.create({
  input_group: {
    width: '100%',
    borderRadius: getWidth(8),
    backgroundColor: '#f0f0f0',
    paddingHorizontal: getWidth(8),
    height: getHeight(50),
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
  },
});
