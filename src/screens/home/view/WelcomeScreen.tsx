import {View, StatusBar, StyleSheet} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {HomeRouteProps} from '../../../routes/RouteProps';
import {
  BigText,
  CustomIconButton,
  SizedBox,
  SmallText,
  TextButton,
} from '../../../components';
import {getHeight, getWidth, width} from '../../../utils';
import {MaterialCommunityIcons} from '../../../constants/Icons';
import {ActivitySliderView} from '../../../views/frontend';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import Carousel from 'react-native-snap-carousel';
export default function WelcomeScreen({
  navigation,
  route,
}: HomeRouteProps<'welcome'>) {
  useEffect(() => {
    changeNavigationBarColor('#ffffff', true, true);
  }, []);

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <View style={styles.container}>
        <BigText
          props={{
            style: {
              fontWeight: 'bold',
              fontSize: getHeight(22),
              textAlign: 'center',
            },
          }}>
          Hello! Welcome
        </BigText>
        <SmallText>
          Wea are here to champion the future of farming with artificial
          intelligence
        </SmallText>
        <SizedBox height={getHeight(10)} />
        <Carousel
          data={[1, 2, 3, 4, 5]}
          renderItem={({item, index}) => (
            <ActivitySliderView item={item} index={index} />
          )}
          style={{height: getHeight(370), width: width}}
          keyExtractor={(item) => item.toString()}
          itemHeight={getHeight(350)}
          itemWidth={getWidth(width * 0.8)}
          sliderWidth={getWidth(width * 0.9)}
          hasParallaxImages
          bouncesZoom
          bounces
        />

        <SizedBox height={getHeight(2.5)} />
        <BigText
          props={{
            style: {
              fontWeight: 'bold',
              fontSize: getHeight(22),
              textAlign: 'center',
              color: '#000',
            },
          }}>
          Disease Detection
        </BigText>
        <SizedBox height={getHeight(70)} />
        <View style={styles.footer}>
          <View style={styles.footer_child}>
            <CustomIconButton
              handlePress={() => navigation.navigate('auth')}
              Icon={
                <MaterialCommunityIcons
                  size={getHeight(40)}
                  color="#ffffff"
                  name="rocket"
                />
              }
            />
            <SizedBox height={getHeight(5)} />
            <TextButton
              handlePress={() => navigation.navigate('auth')}
              text="Start"
              textSize={getHeight(18)}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  container: {
    flex: 1,
    paddingTop: getHeight(25),
    paddingHorizontal: getWidth(10),
  },

  sliderItem: {
    width: width * 0.8,
    height: getHeight(350),
    borderRadius: getHeight(30),
    backgroundColor: '#f0f0f0',
    alignSelf: 'center',
    position: 'relative',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width,
  },
  footer_child: {
    height: getHeight(105),
    backgroundColor: '#000',
    width: width * 0.6,
    alignSelf: 'center',
    borderTopRightRadius: getWidth(120),
    borderTopLeftRadius: getWidth(120),
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  sliderIndexCounterContainer: {
    height: getHeight(50),
    width: width * 0.55,
    borderRadius: getWidth(25),
    position: 'absolute',
    bottom: getHeight(25),
    alignSelf: 'center',
    left: (width * 0.23) / 2,
    zIndex: 10,
    backgroundColor: 'rgba(255,255,255,0.63)',
    overflow: 'hidden',
  },
  decoContainer: {
    width: '45%',
    backgroundColor: 'rgba(255,255,255,0.97)',
    height: '100%',
    borderBottomRightRadius: getWidth(40),
  },
});
