import {View, Text, StatusBar} from 'react-native';
import React, {useState} from 'react';
import tw from '../../lib/tailwind';
import FormField from '../../components/FormField';
import {KeyboardAvoidingView} from 'react-native';
import CustomButton from '../../components/CustomButton';
import {Button} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const navigation = useNavigation();

  return (
    <>
      <View style={tw`bg-primary h-full justify-start items-center py-6`}>
        <KeyboardAvoidingView behavior="padding" style={tw`flex-1 w-full`}>
          <Text style={tw`text-4xl text-white text-center my-10`}>Sign in</Text>
          <FormField
            title="Email"
            value={form.id}
            handleChangeText={e => setForm({...form, email: e})}
            otherStyle="mt-7 m-5"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={e => setForm({...form, password: e})}
            otherStyle="mt-7 m-5"
          />

          <CustomButton
            title="Login"
            containerStyles="m-5"
            textStyles="text-gray-200"
          />
          <View style={tw`justify-center pt-5 flex-row`}>
            <Text style={tw`text-lg text-gray-100 font-normal`}>
              First time here?
            </Text>
            <TouchableOpacity
              style={tw`ml-2`}
              onPress={() => navigation.navigate('SignUp')}>
              <Text style={tw`text-lg font-semibold text-gray-500`}>
                Register now.
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

export default SignIn;
