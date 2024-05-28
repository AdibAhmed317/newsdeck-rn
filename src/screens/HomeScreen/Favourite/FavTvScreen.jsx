import {View, Text} from 'react-native';
import React from 'react';
import tw from '../../../lib/tailwind';
import CustomButton from '../../../components/CustomButton';

const FavTvScreen = () => {
  return (
    <View style={tw`h-full bg-primary px-2 justify-center items-center`}>
      <CustomButton title="Sign in" containerStyles="w-1/2 bg-blue-900" />
    </View>
  );
};

export default FavTvScreen;
