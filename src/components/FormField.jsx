import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import tw from '../lib/tailwind';
import Entypo from 'react-native-vector-icons/Entypo';

const FormField = ({
  title,
  value,
  handleChangeText,
  otherStyle,
  placeholder,
  type,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={tw`${otherStyle} my-2`}>
      <Text style={tw`text-base text-white font-medium`}>{title}</Text>
      <View
        style={tw`w-full h-16 border-2 border-gray-50 rounded-2xl px-4 bg-black/20 focus:border-blue-900 items-center flex-row`}>
        <TextInput
          style={tw`flex-1 w-full h-full text-black font-semibold text-base`}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
        />
        {type === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <View style={tw`flex justify-center items-center w-full h-full`}>
              {!showPassword ? (
                <Entypo name="eye-with-line" color="white" size={20} />
              ) : (
                <Entypo name="eye" color="white" size={20} />
              )}
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
