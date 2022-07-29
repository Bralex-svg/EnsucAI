import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import React from 'react';
import {AuthRouteProps} from '../../../routes/RouteProps';
import resources from '../../../resources';
import {getHeight, getWidth, width} from '../../../utils';
import {BigText, SizedBox, SmallText, TextButton} from '../../../components';
import CustomIconButtom from '../../../components/CustomIconButtom';
import {Feather} from '../../../constants/Icons';
export default function AuthWelcomeScreen({
  navigation,
  route,
}: AuthRouteProps<'welcome'>) {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <SizedBox height={getHeight(5)} />
      <View style={styles.image_container}>
        <View
          style={{
            position: 'absolute',
            top: getHeight(10),
            zIndex: 10,
            left: getWidth(10),
          }}>
          <CustomIconButtom
            handlePress={() =>
              navigation.canGoBack()
                ? navigation.goBack()
                : navigation.navigate('home')
            }
            Icon={<Feather name="chevron-left" size={getHeight(25)} />}
          />
        </View>
        <Image
          resizeMethod="resize"
          resizeMode="cover"
          source={resources.man_drone_control}
          style={styles.image}
        />
      </View>
      <View style={styles.message_container}>
        <BigText
          props={{
            style: {
              textAlign: 'center',
              fontSize: getHeight(22),
              fontWeight: 'bold',
            },
          }}>
          Discover your farm in your palm
        </BigText>
        <SizedBox height={getHeight(5)} />
        <SmallText>
          Explore all exciting features of this App and use it to your
          advantage. Your recommended farm practices are handly
        </SmallText>
      </View>
      <SizedBox height={25} />
      <View style={styles.login_register_container}>
        <View
          style={{
            ...styles.page_buttton,
            borderBottomRightRadius: getWidth(40),
            backgroundColor: '#f5f5f5',
            zIndex: 1,
          }}>
          <TextButton
            handlePress={() => navigation.navigate('register')}
            text="Register"
            textColor="#000"
            textSize={getHeight(20)}
          />
        </View>
        <View style={{...styles.page_buttton, backgroundColor: '#000'}}>
          <TextButton
            handlePress={() => navigation.navigate('login')}
            text="Sign in"
            textColor="#fff"
            textSize={getHeight(20)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ffffff',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  image_container: {
    width: width * 0.9,
    height: getHeight(400),
    alignSelf: 'center',
    borderRadius: getHeight(30),
    overflow: 'hidden',
    position: 'relative',
    marginVertical: getHeight(20),
    padding: 0,
  },
  message_container: {
    paddingHorizontal: getWidth(15),
  },
  login_register_container: {
    height: getHeight(60),
    borderRadius: getHeight(10),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.8,
    alignSelf: 'center',
    backgroundColor: '#000000',
    overflow: 'hidden',
    padding: 0,
    borderLeftColor: '#fff',
    borderWidth: 0,
  },
  page_buttton: {
    flex: 1,
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
