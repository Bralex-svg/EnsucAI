import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DashboardRouteProps} from '../../../routes/RouteProps';
import {colors, Divider} from 'react-native-elements';
import {
  BigText,
  Expanded,
  RowContainer,
  SizedBox,
  SmallText,
} from '../../../components';
import CustomIconButtom from '../../../components/CustomIconButtom';
import {getHeight, getWidth} from '../../../utils';
import {Feather} from '../../../constants/Icons';
import resources from '../../../resources';
import {DashboardActionCard} from '../../../views/frontend';
import {DashboardActions} from '../../../data';
import {color} from 'react-native-reanimated';
export default function DashboardScreen({
  navigation,
  route,
}: DashboardRouteProps<'dashboard'>) {
  return (
    <View style={styles.root}>
      <SizedBox height={getHeight(15)} />
      <View style={styles.row_container}>
        <RowContainer
          children={[
            <CustomIconButtom
              Icon={<Feather name="chevron-left" size={getHeight(24)} />}
            />,
            <Expanded />,
            <CustomIconButtom
              handlePress={() => navigation.navigate('live_record')}
              Icon={<Feather name="camera" size={getHeight(28)} />}
            />,
            <SizedBox width={getWidth(15)} />,
            <View style={styles.avatar_container}>
              <CustomIconButtom
                handlePress={() => navigation.navigate('account_stack')}
                Icon={<Feather name="more-vertical" size={getHeight(20)} />}
              />
              <SizedBox width={getWidth(5)} />
              <View style={styles.avatar_image}>
                <Image
                  source={resources.user_avatar}
                  style={{width: '100%', height: '100%'}}
                  resizeMethod="resize"
                  resizeMode="cover"
                />
              </View>
            </View>,
          ]}
        />
      </View>
      <SizedBox height={getHeight(8)} />
      <View style={styles.about_container}>
        <BigText children="You are ready!" />
        <SmallText children="Manage your farm with all our amazig features right here." />
      </View>
      <Divider />
      <SizedBox height={getHeight(5)} />
      <View style={styles.actions_container}>
        <FlatList
          data={DashboardActions}
          keyExtractor={(item) =>
            Math.random().toString() +
            Date.now().toString() +
            item.title.toString()
          }
          renderItem={({item}) => (
            <DashboardActionCard
              handleNavigation={() =>
                navigation.navigate(item.route ? item.route : 'dashboard')
              }
              info={item}
            />
          )}
          numColumns={2}
          showsVerticalScrollIndicator={false}
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
  row_container: {
    paddingHorizontal: getWidth(20),
  },
  avatar_container: {
    width: getWidth(85),
    height: getHeight(48),
    borderRadius: getWidth(25),
    padding: getWidth(5),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.85,
    borderColor: '#d0d0d0',
  },
  avatar_image: {
    width: getWidth(45),
    height: getHeight(45),
  },
  about_container: {
    padding: getWidth(15),
  },
  actions_container: {
    flex: 1,
    padding: getWidth(10),
  },
});
