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
import FavouriteScreen from '../screens/HomeScreen/FavouriteScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
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
            backgroundColor: '#363b49', // Ensure the background color matches your design
            position: 'absolute', // Optional: To avoid any unwanted spacing at the bottom
            elevation: 0, // Remove shadow on Android
            shadowOpacity: 0, // Remove shadow on iOS
            borderTopWidth: 0, // Remove the top border
          },
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
        <Tab.Screen
          options={{headerShown: false}}
          name="Favourite"
          component={FavouriteScreen}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigator;
