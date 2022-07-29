import {View, Text, ViewProps} from 'react-native';
import React, {ReactNode} from 'react';
import {getHeight} from '../utils';

interface IProps {
  children: ReactNode[];
  props?: ViewProps;
}
export default function RowContainer({children, props}: IProps) {
  return (
    <View
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      {...props}>
      {children.map((chil) => (
        <React.Fragment key={Date.now.toString() + Math.random().toString()}>
          {chil}
        </React.Fragment>
      ))}
    </View>
  );
}
