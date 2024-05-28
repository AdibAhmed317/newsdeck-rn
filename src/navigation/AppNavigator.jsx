import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './AuthStackNavigator';
import MainTabNavigator from './MainTabNavigator';
import {navigationRef} from '../utils/RootNavigationHelper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainStackNavigator from './MainStackNavigator';

const RootStack = createNativeStackNavigator();

const AppNavigator = () => {
  const isLoggedIn = true;

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Tab" component={MainTabNavigator} />
        <RootStack.Screen name="Auth" component={AuthStackNavigator} />
        <RootStack.Screen name="Main" component={MainStackNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
