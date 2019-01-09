import React from 'react';
import { Button, Text, View, Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
});

const ProfileStack = createStackNavigator({
  Profile: { screen: ProfileScreen },
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <Image style={{
      width: 21,
      height: 21,
    }} source={focused ? require('./assets/images/bottom_tabbar/tabbar_dashboard_active.png') : require('./assets/images/bottom_tabbar/tabbar_dashboard.png')} />
  ),
}

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <Image style={{
      width: 21,
      height: 21,
    }} source={focused ? require('./assets/images/bottom_tabbar/tabbar_profile_active.png') : require('./assets/images/bottom_tabbar/tabbar_profile.png')} />
  ),
}

export default createAppContainer(createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Profile: { screen: ProfileStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
    }),
    tabBarOptions: {
      activeTintColor: '#51C9A2',
      inactiveTintColor: '#2D3236',
    },
  }
));
