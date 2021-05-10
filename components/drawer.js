import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase'
import db from '../config'
import { DrawerItems } from 'react-navigation-drawer'

export default class CustomSideBarMenu extends React.Component {
    render() {
        return (
            <View>
                <View>
                    <DrawerItems
                        {...this.props} />
                </View>

                <View>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('WelcomeScreen')
                        firebase.auth().signOut()
                    }}>
                        <Text>
                            Log Out
</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}