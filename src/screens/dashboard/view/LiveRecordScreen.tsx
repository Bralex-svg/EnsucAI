import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef} from 'react';
import {colors} from 'react-native-elements';
import {RNCamera, FaceDetector} from 'react-native-camera';
import CustomIconButtom from '../../../components/CustomIconButtom';
import {getHeight, getWidth} from '../../../utils';
import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from '../../../constants/Icons';
import {SizedBox} from '../../../components';
import {DashboardRouteProps} from '../../../routes/RouteProps';
export default function LiveRecordScreen({
  navigation,
  route,
}: DashboardRouteProps<'live_record'>) {
  const cameraRef = useRef<any>(null);

  async function takePicture() {
    if (cameraRef) {
      const options = {quality: 1, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);
      console.log(data.uri);
    }
  }
  return (
    <View style={styles.root}>
      <View style={styles.second_effect_container}>
        <View style={styles.effect_button}>
          <CustomIconButtom
            Icon={
              <MaterialCommunityIcons
                color={colors.white}
                name="chart-areaspline"
                size={getHeight(40)}
              />
            }
          />
        </View>
        <SizedBox height={getHeight(10)} />
        <View style={styles.effect_button}>
          <CustomIconButtom
            Icon={
              <Ionicons
                color={colors.white}
                name="location-sharp"
                size={getHeight(40)}
              />
            }
          />
        </View>
      </View>
      <View style={styles.navigation_header}>
        <View style={styles.navigation_controls}>
          <CustomIconButtom
            handlePress={() =>
              navigation.canGoBack()
                ? navigation.goBack()
                : navigation.navigate('dashboard')
            }
            Icon={
              <Feather
                name="chevron-left"
                color={colors.white}
                size={getHeight(24)}
              />
            }
          />
        </View>
        <View style={styles.navigation_controls}>
          <CustomIconButtom
            Icon={
              <Feather
                name="more-vertical"
                color={colors.white}
                size={getHeight(24)}
              />
            }
          />
        </View>
      </View>
      <RNCamera
        ref={cameraRef}
        autoFocus="on"
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        onGoogleVisionBarcodesDetected={({barcodes}) => {
          //   console.log(barcodes);
        }}
      />
      <View style={styles.camera_controls_container}>
        <CustomIconButtom
          Icon={
            <SimpleLineIcons
              color={colors.white}
              name="equalizer"
              size={getHeight(23)}
            />
          }
        />
        <CustomIconButtom
          handlePress={() => takePicture()}
          Icon={
            <Feather
              color={colors.white}
              name="stop-circle"
              size={getHeight(23)}
            />
          }
        />
        <CustomIconButtom
          Icon={
            <SimpleLineIcons
              color={colors.white}
              name="camera"
              size={getHeight(23)}
            />
          }
        />
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
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  camera_controls_container: {
    backgroundColor: 'rgba(0,0,0,0.85)',
    position: 'absolute',
    zIndex: 1,
    width: '95%',
    bottom: getHeight(25),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    borderRadius: getWidth(10),
    height: getHeight(50),
  },
  navigation_header: {
    position: 'absolute',
    top: getHeight(36),
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    zIndex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: getWidth(15),
  },
  navigation_controls: {
    width: getWidth(45),
    height: getHeight(45),
    borderRadius: getHeight(45),
    backgroundColor: 'rgba(0,0,0,0.45)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  second_effect_container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: getHeight(180),
    padding: getWidth(10),
    position: 'absolute',
    right: getWidth(10),
    zIndex: 1,
    bottom: getHeight(100),
  },
  effect_button: {
    borderRadius: getWidth(5),
    borderWidth: 0.85,
    borderColor: colors.grey0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: getHeight(5),
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
});
