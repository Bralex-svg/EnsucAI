import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {getHeight, getWidth, width} from '../../utils';
import {IDashboardAction} from '../../interface';
import {BigText, SizedBox} from '../../components';

interface IProps {
  info: IDashboardAction;
  handleNavigation?: () => void;
}
export default function DashboardActionCard({info, handleNavigation}: IProps) {
  return (
    <View style={styles.root}>
      <View style={styles.image_container}>
        <Image source={info.image} resizeMethod="resize" resizeMode="cover" />
      </View>
      <TouchableOpacity onPress={handleNavigation}>
        <BigText
          props={{style: {fontWeight: 'bold', fontSize: getHeight(18)}}}
          children={info.title}
          fontsize={getHeight(18)}
        />
      </TouchableOpacity>
      <SizedBox height={getHeight(8)} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: getWidth(width * 0.4),
    height: getHeight(150),
    borderRadius: getWidth(15),
    backgroundColor: '#f0f0f0',
    marginHorizontal: getWidth(8),
    marginVertical: getWidth(15),
    borderWidth: 0.85,
    borderColor: '#f0f0f0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'relative',
  },
  image_container: {
    position: 'absolute',
    top: -getHeight(20),
    width: getWidth(width * 0.3),
    height: getHeight(120),
    right: 0,
    left: '20%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
