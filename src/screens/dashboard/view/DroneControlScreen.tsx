import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BottomSheet, colors, Divider, Slider} from 'react-native-elements';
import {getHeight, getWidth, height} from '../../../utils';
import {
  BigText,
  Expanded,
  RowContainer,
  SizedBox,
  SmallText,
} from '../../../components';
import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from '../../../constants/Icons';
import CustomIconButtom from '../../../components/CustomIconButtom';
import resources from '../../../resources';
import {DashboardRouteProps} from '../../../routes/RouteProps';
export default function DroneControlScreen({
  navigation,
  route,
}: DashboardRouteProps<'drone_control'>) {
  return (
    <View style={styles.root}>
      <View style={styles.capture_view}>
        <View style={styles.routing_header}>
          <RowContainer
            children={[
              <View style={styles.routing_button}>
                <CustomIconButtom
                  handlePress={() =>
                    navigation.canGoBack()
                      ? navigation.goBack()
                      : navigation.navigate('dashboard')
                  }
                  Icon={<Feather name="chevron-left" size={getHeight(24)} />}
                />
              </View>,
              <Expanded />,
              <View style={styles.routing_button}>
                <CustomIconButtom
                  Icon={<Feather name="more-vertical" size={getHeight(24)} />}
                />
              </View>,
            ]}
          />
        </View>
        <Image
          source={resources.field}
          style={{width: '100%', height: '100%'}}
          resizeMethod="resize"
          resizeMode="cover"
        />
      </View>
      <BottomSheet
        isVisible
        containerStyle={{
          width: '100%',
          backgroundColor: 'rgba(255,255,255,0.25)',
        }}>
        <View style={styles.sheet_content_container}>
          <View
            style={{
              width: getWidth(80),
              height: getHeight(6),
              borderRadius: getHeight(15),
              backgroundColor: '#d0d0d0',
              alignSelf: 'center',
            }}></View>
          <SizedBox height={getHeight(5)} />
          <BigText
            props={{
              style: {
                fontSize: getHeight(18),
                fontWeight: 'bold',
                textAlign: 'center',
              },
            }}
            children="Drone Settings"
          />
          <SizedBox height={getHeight(8)} />
          <BigText
            children="Drone Speed"
            props={{
              style: {
                textAlign: 'left',
                fontWeight: 'bold',
                fontSize: getHeight(18),
              },
            }}
          />
          <View style={styles.speed_container}>
            <View style={{flex: 1}}>
              <SmallText children="Slow" />
            </View>
            <View style={styles.high_speed_container}>
              <SmallText children="Fast" />
            </View>
          </View>
          <SizedBox height={getHeight(10)} />
          <View>
            <RowContainer
              children={[
                <SmallText children="Altitude" />,
                <Expanded />,
                <SmallText children="100m" />,
              ]}
            />
            <SizedBox height={getHeight(5)} />
            <Divider />
            <SizedBox height={getHeight(5)} />
            <Slider
              allowTouchTrack
              thumbStyle={styles.slider_thumb}
              maximumValue={100}
              minimumValue={0}
              thumbProps={{
                children: (
                  <Ionicons
                    name="md-speedometer-outline"
                    size={getHeight(14)}
                    color={colors.white}
                  />
                ),
              }}
            />
            <SizedBox height={getHeight(8)} />
            <Divider />
            <RowContainer
              children={[
                <BigText children="Battery Power" />,
                <Expanded />,
                <BigText children="Temperature" />,
              ]}
            />
            <RowContainer
              children={[
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: getHeight(5),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <MaterialCommunityIcons
                    name="battery-medium"
                    size={getHeight(22)}
                  />
                  <SizedBox width={getWidth(1)} />
                  <BigText children="48%" />
                </View>,
                <Expanded />,
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: getHeight(5),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <FontAwesome5 name="temperature-high" size={getHeight(22)} />
                  <SizedBox width={getWidth(1)} />
                  <BigText children="32" />
                  <MaterialCommunityIcons
                    name="temperature-celsius"
                    size={getHeight(14)}
                  />
                </View>,
              ]}
            />
            <SizedBox height={getHeight(5)} />
            <Divider />
            <SizedBox height={5} />
            <RowContainer
              children={[<BigText children="SD Card" />, <Expanded />]}
            />
            <View style={styles.storage_info_container}>
              <View style={styles.storage_used_info_container}>
                <BigText children="48.6GB" />
              </View>
              <View style={{flex: 1}}>
                <BigText children="2.0TB" />
              </View>
            </View>
            <SizedBox height={getHeight(5)} />
            <Divider />
            <SizedBox height={10} />
            <RowContainer
              children={[
                <Expanded />,
                <CustomIconButtom
                  Icon={
                    <SimpleLineIcons name="equalizer" size={getHeight(24)} />
                  }
                />,
                <Expanded />,
                <View style={styles.status_container}>
                  <BigText children="On" />
                  <View style={styles.status_icon_button}>
                    <CustomIconButtom
                      Icon={<Feather name="wifi" size={getHeight(24)} />}
                    />
                  </View>
                </View>,
                <Expanded />,
                <View style={styles.status_container}>
                  <BigText children="Off" />
                  <SizedBox width={getWidth(2)} />
                  <View style={styles.status_icon_button}>
                    <CustomIconButtom
                      Icon={<Feather name="bluetooth" size={getHeight(24)} />}
                    />
                  </View>
                </View>,
                <Expanded />,
              ]}
            />
          </View>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },
  capture_view: {
    height: getHeight(height * 0.4),
    backgroundColor: colors.white,
    width: '100%',
    position: 'relative',
  },
  sheet_content_container: {
    backgroundColor: '#f0f0f0',
    height: getHeight(height * 0.6),
    padding: getWidth(15),
    width: '100%',
    borderTopRightRadius: getWidth(40),
    borderTopLeftRadius: getWidth(40),
    shadowColor: colors.grey2,
    shadowOffset: {height: -5, width: 0},
    elevation: 1,
    shadowOpacity: 1,
    paddingHorizontal: getWidth(30),
  },
  high_speed_container: {
    flex: 1,
    backgroundColor: colors.white,
    height: '100%',
    borderRadius: getHeight(10),
    borderTopLeftRadius: getHeight(50),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  speed_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: getHeight(45),
    borderRadius: getHeight(10),
    backgroundColor: '#d0d0d0',
    padding: getHeight(5),
  },
  slider_thumb: {
    backgroundColor: colors.black,
    width: getWidth(30),
    height: getHeight(30),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  storage_info_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#d0d0d0',
    padding: getHeight(5),
    height: getHeight(45),
    borderRadius: getWidth(8),
  },
  storage_used_info_container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    height: '100%',
    borderRadius: getHeight(8),
    borderBottomRightRadius: getHeight(45),
  },
  status_icon_button: {
    width: getWidth(40),
    height: getHeight(40),
    borderRadius: getHeight(10),
    padding: getHeight(5),
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  status_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  routing_button: {
    width: getWidth(35),
    height: getHeight(35),
    borderRadius: getWidth(35),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  routing_header: {
    position: 'absolute',
    top: getHeight(15),
    width: '100%',
    left: 0,
    paddingHorizontal: getWidth(40),
    zIndex: 2,
  },
});
