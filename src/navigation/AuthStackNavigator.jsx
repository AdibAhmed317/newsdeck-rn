import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/AuthScreen/SignIn';
import SignUp from '../screens/AuthScreen/SignUp';
import {StatusBar} from 'react-native';

const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor="#141823" />
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SignUp"
          component={SignUp}
        />
      </Stack.Navigator>
    </>
  );
};

export default AuthStackNavigator;
