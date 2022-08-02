import {Image, ImageProps, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface IProps {
  path: any;
  props?: ImageProps;
}
export default function LocalImage({path, props}: IProps) {
  return (
    <Image
      source={path}
      resizeMethod="resize"
      resizeMode="cover"
      style={{width: '100%', height: '100%'}}
      {...props}
    />
  );
}

const styles = StyleSheet.create({});
