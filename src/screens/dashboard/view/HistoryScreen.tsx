import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, Divider} from 'react-native-elements';
import {BigText, Expanded, LocalImage, RowContainer} from '../../../components';
import {Feather} from '../../../constants/Icons';
import {getHeight, getWidth} from '../../../utils';
import {DashboardActionImages} from '../../../resources';
import CustomIconButtom from '../../../components/CustomIconButtom';
import {DashboardRouteProps} from '../../../routes/RouteProps';
export default function HistoryScreen({
  navigation,
  route,
}: DashboardRouteProps<'history'>) {
  return (
    <View style={styles.root}>
      <View
        style={{
          paddingHorizontal: getWidth(25),
          paddingVertical: getHeight(15),
        }}>
        <RowContainer
          children={[
            <CustomIconButtom
              handlePress={() =>
                navigation.canGoBack()
                  ? navigation.goBack()
                  : navigation.navigate('dashboard')
              }
              Icon={<Feather name="chevron-left" size={getHeight(24)} />}
            />,
            <Expanded />,
            <View style={{width: getWidth(50), height: getHeight(50)}}>
              <LocalImage path={DashboardActionImages.history} />
            </View>,
            <Expanded />,
            <CustomIconButtom
              Icon={<Feather name="more-vertical" size={getHeight(24)} />}
            />,
          ]}
        />
      </View>
      <Divider />
      <View
        style={{
          paddingHorizontal: getWidth(10),
          paddingVertical: getHeight(10),
        }}>
        <BigText
          props={{
            style: {
              fontWeight: 'normal',
              fontSize: getHeight(16),
              textAlign: 'center',
            },
          }}
          children="Manage your farm with all our amazing features right here"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
