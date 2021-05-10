import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase'
import db from '../config'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { TabNavigator } from './tabNavigator';
import { CustomSideBarMenu } from './drawer'

export const DrawerNavigator = createDrawerNavigator({
    home: { screen: TabNavigator }},
    { contentComponent: CustomSideBarMenu },
    { inititalRouteName: 'home' }
)