import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FavNewspaperScreen from '../../screens/HomeScreen/Favourite/FavNewspaperScreen';
import FavTvScreen from '../../screens/HomeScreen/Favourite/FavTvScreen';
import {View, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import tw from '../../lib/tailwind';

const Tab = createMaterialTopTabNavigator();

const FavouriteTopTabNavigator = () => {
  return (
    <View style={tw`flex-1 bg-primary`}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: {
            height: 45,
            backgroundColor: '#363b49',
            borderRadius: 10,
            margin: 10,
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: '#c6c6d6',
          tabBarIndicatorStyle: {
            backgroundColor: '#c6c6d6',
            height: '100%',
            borderRadius: 10,
          },
          tabBarItemStyle: {
            borderRadius: 5,
            overflow: 'hidden',
          },
          tabBarLabel: () => {
            null;
          },
          tabBarIcon: ({color}) => {
            let iconName;
            let label;

            if (route.name === 'FavNewspaper') {
              iconName = 'newspaper-o';
              label = 'Newspaper';
              return (
                <View style={tw`flex-1 flex justify-center items-center`}>
                  <FontAwesome name={iconName} size={15} color={color} />
                  <Text
                    style={{
                      color,
                      fontSize: 8,
                      width: 100,
                      textAlign: 'center',
                    }}>
                    {label}
                  </Text>
                </View>
              );
            } else if (route.name === 'FavTv') {
              iconName = 'tv';
              label = 'TV';
              return (
                <View style={tw`flex-1 flex justify-center items-center`}>
                  <Feather name={iconName} size={15} color={color} />
                  <Text
                    style={{
                      color,
                      fontSize: 8,
                      width: 100,
                      textAlign: 'center',
                    }}>
                    {label}
                  </Text>
                </View>
              );
            }
          },
        })}>
        <Tab.Screen name="FavNewspaper" component={FavNewspaperScreen} />
        <Tab.Screen name="FavTv" component={FavTvScreen} />
      </Tab.Navigator>
    </View>
  );
};

export default FavouriteTopTabNavigator;
