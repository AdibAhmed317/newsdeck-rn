import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';
import NewspaperScreen from '../screens/HomeScreen/NewspaperScreen';
import TVScreen from '../screens/HomeScreen/TVScreen';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import tw from '../lib/tailwind';
import {StatusBar} from 'react-native';
import FavouriteTopTabNavigator from './Favourite/FavouriteTopTabNavigator';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor="#141823" />
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: {
            display: 'flex',
            height: 60,
            marginVertical: 10,
            marginHorizontal: 25,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: '#363b49',
            position: 'absolute',
            elevation: 0,
            shadowOpacity: 0,
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: '#c6c6d6',
          tabBarInactiveTintColor: '#141823',
          tabBarLabel: () => {
            null;
          },
          tabBarIcon: ({color, size}) => {
            let iconName;
            let label;

            if (route.name === 'Newspaper') {
              iconName = 'newspaper-o';
              label = 'Newspaper';
              return (
                <View style={tw`items-center`}>
                  <FontAwesome name={iconName} size={size} color={color} />
                  <Text style={{color, fontSize: 8}}>{label}</Text>
                </View>
              );
            } else if (route.name === 'TV') {
              iconName = 'tv';
              label = 'TV';
              return (
                <View style={tw`items-center`}>
                  <Feather name={iconName} size={size} color={color} />
                  <Text style={{color, fontSize: 8}}>{label}</Text>
                </View>
              );
            } else if (route.name === 'Favourite') {
              iconName = 'book';
              label = 'Favourite';
              return (
                <View style={tw`items-center`}>
                  <AntDesign name={iconName} size={size} color={color} />
                  <Text style={{color, fontSize: 8}}>{label}</Text>
                </View>
              );
            }
          },
        })}>
        <Tab.Screen
          options={{headerShown: false}}
          name="Newspaper"
          component={NewspaperScreen}
        />
        <Tab.Screen
          options={{headerShown: false}}
          name="TV"
          component={TVScreen}
        />
        {/* <Tab.Screen
          options={{headerShown: false}}
          name="Favourite"
          component={FavouriteTopTabNavigator}
        /> */}
      </Tab.Navigator>
    </>
  );
};

export default MainTabNavigator;
