import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default class SantaAnimation extends React.Component {
  render() {
    return (
   <LottieView
   source = {require('../assets/santaAnimation.json') }
  style = {{width:'60%'}}
   autoPlay loop />
    );
  }
}