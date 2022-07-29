import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from 'react-native-elements';
import {getHeight} from '../utils';

interface IProps {
  flex?: number;
}

export default function CustomDivider({flex}: IProps) {
  return (
    <View
      style={{...styles.root, flex: flex ? flex : 1, borderStyle: 'solid'}}
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
