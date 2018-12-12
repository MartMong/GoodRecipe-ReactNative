import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator,createAppContainer  } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'

import Explore from './screens/Explore';
import Saved from './screens/Saved';

const RootStack =  createBottomTabNavigator({
  Explore: {
    screen: Explore,
    navigationOptions:{
      tabBarLabel:'EXPLORE',
      tabBarIcon : ({tintColor}) => (
        <Icon name="ios-home" color={tintColor} size={24}/>
      )
    }
  },
  Saved: {
    screen: Saved,
    navigationOptions:{
      tabBarLabel:'SAVED',
      tabBarIcon : ({tintColor}) => (
        <Icon name="ios-heart" color={tintColor} size={24}/>
      )
    }
  }
});

const App = createAppContainer(RootStack);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
