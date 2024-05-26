import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import tw from '../../lib/tailwind';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';

import tvs from '../../assets/data/tv';
import {navigate} from '../../utils/RootNavigationHelper';

const TVScreen = () => {
  return (
    <View style={tw`h-full bg-primary pt-5 pb-14`}>
      <ScrollView contentContainerStyle={tw`p-4`}>
        <View style={tw`flex-row flex-wrap`}>
          {tvs.map(tv => (
            <View key={tv.id} style={tw`w-1/2 px-2 mb-4`}>
              <TouchableOpacity
                onPress={() => {
                  navigate('Main', {
                    screen: 'SingleDataScreen',
                    params: {
                      title: tv.title,
                      siteURL: tv.siteUrl,
                    },
                  });
                }}
                style={tw`bg-slate-800 p-4 rounded-lg flex justify-center items-center h-40`}>
                <Image
                  style={tw`w-full h-1/2`}
                  source={tv.src}
                  resizeMode="contain"
                />
                <Text style={tw`text-white/70 text-sm text-center font-medium`}>
                  {tv.title}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default TVScreen;
