import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AddScreen from '../screens/addScreen';

import Addscreen from '../screens/addScreen'
import DetailsScreen from '../screens/detailsScreen'
import MappingScreen from '../screens/mappingScreen'
import OverviewScreen from '../screens/overviewScreen'


const AppNavigator = createStackNavigator({
  Overview: {
    screen: OverviewScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
  Add: {
    screen: AddScreen,
  },
  Map: {
    screen: MappingScreen,
  },
});

export default createAppContainer(AppNavigator);