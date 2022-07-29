import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {HomeRouteParams, AuthRouteParams} from './RouteParams';

export type HomeRouteProps<T extends keyof HomeRouteParams> = {
  navigation: NativeStackNavigationProp<HomeRouteParams, T>;
  route: RouteProp<HomeRouteParams, T>;
};

export type AuthRouteProps<T extends keyof AuthRouteParams> = {
  navigation: NativeStackNavigationProp<AuthRouteParams, T>;
  route: RouteProp<AuthRouteParams, T>;
};
