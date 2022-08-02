import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {getHeight, getWidth, width} from '../../../utils';
import {
  BigText,
  CustomButton,
  CustomInput,
  Expanded,
  LocalImage,
  RowContainer,
  SizedBox,
  SmallText,
} from '../../../components';
import CustomIconButtom from '../../../components/CustomIconButtom';
import {Entypo, Feather, Fontisto} from '../../../constants/Icons';
import {colors} from 'react-native-elements';
import {AccountRouteProps} from '../../../routes/RouteProps';
import resources from '../../../resources';
import DatePicker from 'react-native-date-picker';
////
export default function AccountPreviewScreen({
  navigation,
  route,
}: AccountRouteProps<'account_preview'>) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.root}>
      <View
        style={{
          paddingVertical: getHeight(15),
          paddingHorizontal: getWidth(25),
        }}>
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={(date) => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
        <RowContainer
          children={[
            <CustomIconButtom
              handlePress={() =>
                navigation.canGoBack()
                  ? navigation.goBack()
                  : navigation.navigate('account')
              }
              Icon={<Feather name="chevron-left" size={getHeight(24)} />}
            />,
            <Expanded />,
            <BigText children="My Profile" />,
            <Expanded />,
          ]}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: getWidth(80),
          height: getHeight(80),
          position: 'relative',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <View
          style={{
            width: getWidth(70),
            height: getHeight(70),
            borderRadius: getWidth(100),
            alignSelf: 'center',
            borderWidth: 0.85,
            borderColor: '#d0d0d0',
            overflow: 'hidden',
            position: 'relative',
          }}>
          <LocalImage path={resources.user_avatar} />
        </View>
        <View style={{position: 'absolute', right: 5, bottom: 5, zIndex: 2}}>
          <CustomIconButtom
            Icon={<Entypo color="green" name="camera" size={getWidth(22)} />}
          />
        </View>
      </View>
      <View style={styles.info_container}>
        <BigText children="Basic Details" />
        <SizedBox height={getHeight(5)} />
        <View style={styles.form_group}>
          <SmallText children="Full Name" />
          <CustomInput />
          <SizedBox height={getHeight(5)} />
          <SmallText children="Date Of Birth" />
          <View style={{position: 'relative'}}>
            <CustomInput />
            <View
              style={{
                position: 'absolute',
                right: getWidth(10),
                top: getHeight(15),
                zIndex: 1,
                alignSelf: 'center',
              }}>
              <CustomIconButtom
                handlePress={() => setOpen(!open)}
                Icon={<Fontisto name="date" size={getHeight(20)} />}
              />
            </View>
          </View>
          <SizedBox height={getHeight(5)} />
          <SmallText children="Gender" />
          <CustomInput />
          <SizedBox height={getHeight(5)} />
          <SmallText children="Mobile Number" />
          <CustomInput />
          <SizedBox height={getHeight(5)} />
          <Expanded />
        </View>
      </View>
      <View
        style={{
          width: '100%',
          bottom: 0,
          paddingHorizontal: getWidth(30),
        }}>
        <CustomButton>
          <BigText props={{style: {color: colors.white}}} children="Save" />
        </CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
    position: 'relative',
  },
  info_container: {
    paddingHorizontal: getWidth(25),
    paddingVertical: getHeight(15),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1,
  },
  form_group: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingHorizontal: getWidth(10),
    width: '100%',
    position: 'relative',
  },
});
