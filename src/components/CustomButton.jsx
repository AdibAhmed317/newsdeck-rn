import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import tw from '../lib/tailwind';

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
      style={tw`bg-blue-700 rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${
        isLoading ? 'opacity-0' : ''
      }`}>
      <Text style={tw`${textStyles} text-primary font-bold text-lg`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
