import {View, Text} from 'react-native';
import React from 'react';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SingleDataScreen from '../screens/HomeScreen/SingleDataScreen';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor="#141823" />
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="SingleDataScreen"
          component={SingleDataScreen}
        />
      </Stack.Navigator>
    </>
  );
};

export default MainStackNavigator;
