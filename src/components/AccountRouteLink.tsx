import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RowContainer from './RowContainer';
import {IAccountLinks} from '../interface';
import BigText from './BigText';
import Expanded from './Expanded';
import SizedBox from './SizedBox';
import {getHeight, getWidth} from '../utils';
import {Divider} from 'react-native-elements';

interface IProps {
  info: IAccountLinks;
}
export default function AccountRouteLink({info}: IProps) {
  return (
    <View style={{padding: getHeight(8)}}>
      <RowContainer
        children={[
          info.Icon,
          <SizedBox width={getWidth(8)} />,
          <BigText
            props={{style: {fontWeight: 'normal', fontSize: getHeight(15)}}}
            children={info.title}
          />,
          <Expanded />,
        ]}
      />
      <SizedBox height={getHeight(2.5)} />
      <Divider />
    </View>
  );
}

const styles = StyleSheet.create({});
