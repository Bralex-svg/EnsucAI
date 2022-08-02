import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, Divider} from 'react-native-elements';
import {Feather} from '../../../constants/Icons';
import {getHeight, getWidth} from '../../../utils';
import CustomIconButtom from '../../../components/CustomIconButtom';
import {
  BigText,
  Expanded,
  LocalImage,
  RowContainer,
  SizedBox,
  SmallText,
} from '../../../components';
import resources from '../../../resources';
import {AccountLinks} from '../../../data';
import AccountRouteLink from '../../../components/AccountRouteLink';
export default function AccountScreent() {
  return (
    <View style={styles.root}>
      <View
        style={{
          paddingVertical: getHeight(15),
          paddingHorizontal: getWidth(25),
        }}>
        <RowContainer
          children={[
            <CustomIconButtom
              Icon={<Feather name="chevron-left" size={getHeight(24)} />}
            />,
            <Expanded />,
            <BigText children="Profile" />,
            <Expanded />,
          ]}
        />
      </View>
      <View
        style={{
          paddingVertical: getHeight(15),
          paddingHorizontal: getWidth(25),
        }}>
        <RowContainer
          children={[
            <View
              style={{
                width: getWidth(70),
                height: getHeight(70),
                borderRadius: getHeight(70),
                overflow: 'hidden',
                borderWidth: 0.85,
                borderColor: '#f0f0f0',
              }}>
              <LocalImage path={resources.user_avatar} />
            </View>,
            <View
              style={{
                padding: getHeight(10),
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <BigText children="Success05 Asy Asy" />
              <SmallText
                props={{style: {fontSize: getHeight(12)}}}
                children="asyasyddf05s@gmail.com"
              />
            </View>,
            <Expanded />,
          ]}
        />
      </View>
      <Divider />
      <SizedBox height={getHeight(10)} />
      <View style={{paddingHorizontal: getWidth(25)}}>
        <FlatList
          data={AccountLinks}
          keyExtractor={(item) => item.title}
          renderItem={({item}) => <AccountRouteLink info={item} />}
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
