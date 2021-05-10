import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import DonateScreen from '../screens/donateScreen';
import RequestScreen from '../screens/requestScreen'

export const TabNavigator = createBottomTabNavigator({
    Donate: {screen:DonateScreen},
    Request: {screen:RequestScreen}
    
})
