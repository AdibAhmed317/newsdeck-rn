import React, {useRef} from 'react';
import {View, Text, Animated, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import WebView from 'react-native-webview';
import Icon from 'react-native-vector-icons/Feather';
import tw from '../../lib/tailwind';

const SingleDataScreen = () => {
  const route = useRoute();
  const {title, siteURL} = route.params || {};
  const navigation = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [60, 0],
    extrapolate: 'clamp',
  });

  const handleScroll = event => {
    const scrollYValue = event.nativeEvent.contentOffset.y;
    scrollY.setValue(scrollYValue);
  };

  return (
    <View style={tw`flex-1 bg-primary`}>
      <Animated.View
        style={[
          tw`absolute top-0 left-0 right-0 z-10 bg-primary`,
          {height: headerHeight, overflow: 'hidden'},
        ]}>
        <View style={tw`flex-row items-center p-4`}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={tw`mr-4`}>
            <Icon name="arrow-left" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={tw`text-lg text-white font-bold`}>{title}</Text>
        </View>
      </Animated.View>
      <Animated.View style={{flex: 1, marginTop: headerHeight}}>
        <WebView
          source={{uri: siteURL}}
          onScroll={handleScroll}
          style={tw`flex-1`}
          allowsFullscreenVideo={true}
        />
      </Animated.View>
    </View>
  );
};

export default SingleDataScreen;
