import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {getHeight, getWidth, width} from '../../utils';
import resources from '../../resources';
import {ParallaxImage, ParallaxImageProps} from 'react-native-snap-carousel';

interface IProps {
  item: any;
  index: number;
}
export default function ActivitySliderItemView(
  {item, index}: IProps,
  parallaxProps: ParallaxImageProps,
) {
  return (
    <View style={styles.sliderItem}>
      <Image
        resizeMethod="resize"
        resizeMode="cover"
        style={{width: '100%', height: '100%'}}
        source={resources.man_drone_control}
      />
      <View style={styles.sliderIndexCounterContainer}>
        <View style={styles.decoContainer}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sliderItem: {
    width: width * 0.89,
    height: getHeight(350),
    borderRadius: getHeight(30),
    backgroundColor: '#f0f0f0',
    alignSelf: 'center',
    position: 'relative',
    marginHorizontal: getWidth(8),
    overflow: 'hidden',
    padding: 0,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width,
  },
  footer_child: {
    height: getHeight(105),
    backgroundColor: '#000',
    width: width * 0.65,
    alignSelf: 'center',
    borderTopRightRadius: getWidth(120),
    borderTopLeftRadius: getWidth(120),
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  sliderIndexCounterContainer: {
    height: getHeight(50),
    width: width * 0.65,
    borderRadius: getWidth(25),
    position: 'absolute',
    bottom: getHeight(25),
    alignSelf: 'center',
    left: (width * 0.2) / 2,
    zIndex: 10,
    backgroundColor: 'rgba(255,255,255,0.63)',
    overflow: 'hidden',
  },
  decoContainer: {
    width: '45%',
    backgroundColor: 'rgba(255,255,255,0.97)',
    height: '100%',
    borderBottomRightRadius: getWidth(40),
  },
});
