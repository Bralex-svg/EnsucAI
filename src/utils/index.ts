import {Dimensions} from 'react-native';

const referenceWidth: number = 360;
const referenceHeight: number = 800;

export const {width, height} = Dimensions.get('screen');

export function getWidth(size: number): number {
  const value = referenceWidth / size;

  return width / value;
}

export function getHeight(size: number): number {
  const value = referenceHeight / size;
  return height / value;
}
