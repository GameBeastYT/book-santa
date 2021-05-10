import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/welcomeScreen';
import { TabNavigator } from './components/tabNavigator'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { DrawerNavigator } from './components/drawerNavigator'
import Drawer from 'react-native-drawer';

export default class App extends React.Component {

  render() {
    return (
      <AppContainer />
    );
  }



}

const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  Drawer : { screen: DrawerNavigator }
})

const AppContainer = createAppContainer(
  SwitchNavigator
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
