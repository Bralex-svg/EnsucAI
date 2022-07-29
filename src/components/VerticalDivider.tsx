import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from 'react-native-elements';
import {getHeight} from '../utils';

interface IProps {
  width?: number;
}
export default function VerticalDivider({width}: IProps) {
  return (
    <View
      style={{
        ...styles.root,
        width: width ? width : '100%',
        borderStyle: 'solid',
      }}
    />
  );
}

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: colors.grey5,
    marginTop: getHeight(5),
  },
});
