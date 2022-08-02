import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from 'react-native-elements';
import {
  BigText,
  CustomButton,
  CustomInput,
  Expanded,
  HorizontalDivider,
  RowContainer,
  SizedBox,
  SmallText,
  TextButton,
} from '../../../components';
import {getHeight, getWidth, width} from '../../../utils';
import CustomIconButtom from '../../../components/CustomIconButtom';
import {AntDesign, Entypo, Feather, Ionicons} from '../../../constants/Icons';
import {AuthRouteProps} from '../../../routes/RouteProps';
import resources from '../../../resources';
import DropShadow from 'react-native-drop-shadow';
export default function LoginScreen({navigation}: AuthRouteProps<'login'>) {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <SizedBox height={getHeight(5)} />
      <RowContainer
        props={{style: {paddingHorizontal: getWidth(12)}}}
        children={[
          <CustomIconButtom
            handlePress={() => navigation.navigate('welcome')}
            Icon={<Feather name="chevron-left" size={getHeight(34)} />}
          />,
          <Expanded />,
        ]}
      />

      <View style={styles.text_container}>
        <BigText
          children="Welcome"
          props={{
            style: {
              fontSize: getHeight(22),
              fontWeight: 'bold',
              textAlign: 'center',
            },
          }}
        />
        <BigText
          props={{
            style: {
              fontSize: getHeight(22),
              fontWeight: 'bold',
              textAlign: 'center',
            },
          }}
          children="back again!"
        />
        <SizedBox height={getHeight(2.5)} />
        <SmallText>Kick start real quick</SmallText>
      </View>
      <SizedBox height={getHeight(15)} />
      <View style={styles.input_container}>
        <CustomInput placeholder="Enter username" />
        <SizedBox height={getHeight(8)} />
        <CustomInput
          placeholder="Password"
          props={{secureTextEntry: true}}
          child={
            <Ionicons
              name="eye-off-outline"
              size={getHeight(24)}
              color="#d0d0d0"
            />
          }
        />
        <SizedBox height={getHeight(8)} />
        <RowContainer
          children={[
            <Expanded />,
            <TextButton text="Recovery Password" textColor={colors.black} />,
          ]}
        />
        <SizedBox height={getHeight(12)} />
        <CustomButton
          handlePress={() => navigation.navigate('dashboard_stack')}
          child={
            <SmallText
              props={{style: {color: colors.white, fontSize: getHeight(20)}}}
              children="Sign in"
            />
          }
        />
        <SizedBox height={15} />
        <RowContainer
          children={[
            <HorizontalDivider />,
            <SizedBox width={getWidth(2.5)} />,
            <SmallText children="or continue with" />,
            <SizedBox width={getWidth(2.5)} />,
            <HorizontalDivider />,
          ]}
        />
        <SizedBox height={getHeight(15)} />
        <RowContainer
          children={[
            <SizedBox width={getWidth(10)} />,
            <DropShadow
              style={{
                shadowColor: '#d0d0d0',
                shadowOffset: {
                  width: getWidth(-1.5),
                  height: getHeight(1.5),
                },
                shadowOpacity: 1,
                shadowRadius: 5,
              }}>
              <CustomIconButtom
                props={{
                  style: {
                    width: getWidth(60),
                    height: getHeight(50),
                    borderRadius: getHeight(10),
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                }}
                Icon={<Image source={resources.google} />}
              />
            </DropShadow>,

            <SizedBox width={getWidth(10)} />,
            <DropShadow
              style={{
                shadowColor: '#d0d0d0',
                shadowOffset: {
                  width: getWidth(-1.5),
                  height: getHeight(1.5),
                },
                shadowOpacity: 1,
                shadowRadius: 5,
              }}>
              <CustomIconButtom
                props={{
                  style: {
                    width: getWidth(60),
                    height: getHeight(50),
                    borderRadius: getHeight(10),
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                }}
                Icon={<Image source={resources.apple} />}
              />
            </DropShadow>,

            <SizedBox width={getWidth(10)} />,
            <DropShadow
              style={{
                shadowColor: '#d0d0d0',
                shadowOffset: {
                  width: getWidth(-1.5),
                  height: getHeight(1.5),
                },
                shadowOpacity: 1,
                shadowRadius: 5,
              }}>
              <CustomIconButtom
                props={{
                  style: {
                    width: getWidth(60),
                    height: getHeight(50),
                    borderRadius: getHeight(10),
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                }}
                Icon={<Image source={resources.facebook} />}
              />
            </DropShadow>,

            <SizedBox width={getWidth(10)} />,
          ]}
        />
        <SizedBox height={getHeight(25)} />
        <TextButton
          textProps={{
            style: {
              fontWeight: 'bold',
              color: colors.primary,
              fontSize: getHeight(18),
            },
          }}
          text="Register Now"
          textColor={colors.primary}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    position: 'relative',
    backgroundColor: colors.white,
  },
  text_container: {
    width: getWidth(241),
    height: getHeight(66),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: getHeight(30),
  },
  input_container: {
    width: width * 0.85,
    alignSelf: 'center',
  },
});
