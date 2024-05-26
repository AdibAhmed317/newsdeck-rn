import {View, Text, StatusBar} from 'react-native';
import React, {useState} from 'react';
import tw from '../../lib/tailwind';
import FormField from '../../components/FormField';
import {KeyboardAvoidingView} from 'react-native';
import CustomButton from '../../components/CustomButton';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const navigation = useNavigation();

  return (
    <>
      <View style={tw`bg-primary h-full justify-start items-center py-6`}>
        <KeyboardAvoidingView behavior="padding" style={tw`flex-1 w-full`}>
          <Text style={tw`text-4xl text-white text-center my-10`}>Sign up</Text>
          <FormField
            title="Username"
            value={form.id}
            handleChangeText={e => setForm({...form, email: e})}
            otherStyle="mt-7 m-5"
          />
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
            type="Password"
          />
          <FormField
            title="Confirm Password"
            value={form.password}
            handleChangeText={e => setForm({...form, password: e})}
            otherStyle="mt-7 m-5"
            type="Password"
          />

          <CustomButton
            title="Create Account"
            containerStyles="m-5"
            textStyles="text-gray-200"
          />
          <View style={tw`justify-center pt-5 flex-row`}>
            <Text style={tw`text-lg text-gray-100 font-pregular`}>
              Already have an account?
            </Text>
            <TouchableOpacity
              style={tw`ml-2`}
              onPress={() => navigation.navigate('SignIn')}>
              <Text style={tw`text-lg font-semibold text-gray-500`}>
                Login.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`ml-2`}
              onPress={() => navigation.navigate('Newspaper')}>
              <Text style={tw`text-lg font-semibold text-gray-500`}>asdf.</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

export default SignUp;
