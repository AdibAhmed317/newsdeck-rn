import {View, Text} from 'react-native';
import React from 'react';
import tw from '../../../lib/tailwind';
import CustomButton from '../../../components/CustomButton';
import {navigate} from '../../../utils/RootNavigationHelper';

const FavNewspaperScreen = () => {
  const handlePress = () => {
    navigate('Auth', {
      screen: 'SignIn',
    });
  };
  return (
    <View style={tw`h-full bg-primary px-2 justify-center items-center`}>
      <CustomButton
        title="Sign in"
        containerStyles="w-1/2 bg-blue-900"
        handlePress={handlePress}
      />
    </View>
  );
};

export default FavNewspaperScreen;
