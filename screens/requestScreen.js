import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase'
import db from '../config'

export default class RequestScreen extends React.Component {

    constructor() {
        super()
        this.state = { book_name: "", description: "", userID: firebase.auth().currentUser.email }
    }

    addRequest = (book_name, description) => {
        var userID = this.state.userID
        var requestID = Math.random().toString(30).substring(7)

        db.collection('requested_books').add({
            'user_ID': userID,
            'book_name': book_name,
            'description': description,
            'request_ID': requestID
        })

        this.setState({ book_name: "", description: "" })

    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                    placeholder="Book Name"
                    onChangeText={(text) => { this.setState({ book_name: text }) }}
                    value={this.state.book_name} />

                <TextInput style={styles.inputBox}
                    placeholder="Description"
                    multiline numberOfLines={10}
                    onChangeText={(text) => { this.setState({ description: text }) }}
                    value={this.state.description} />

                <TouchableOpacity onPress={() => { this.addRequest(this.state.book_name, this.state.description) }}>
                    <Text>
                        Request
                        </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>
                        Cancel
                        </Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputBox: {
        borderWidth: 1,
        width: 200,
        height: 30
    }
})
