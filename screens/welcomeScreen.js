import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase'
import db from '../config'
import SantaAnimation from '../components/santa'
import DonateScreen from './donateScreen';

export default class WelcomeScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "", password: "",
            First_Name: "",
            Last_Name: "",
            Username: "",
            Email: "",
            Password: "",
            Confirm_Password: "",
            Mobile_Number: '',
            Is_Modal_Visible: 'false',
            Address: ''

        }
    }

    showModal = () => {
        return (
            <Modal transparent={true}
                visible={this.state.Is_Modal_Visible}
            >

                <View style={styles.container}>
                    <ScrollView style={{ width: '100%' }}>
                        <KeyboardAvoidingView >
                            <Text>
                                Register Here
</Text>
                            <TextInput style={styles.formTextInput}
                                placeholder={"First Name"}
                                maxLength={20}
                                onChangeText={text => { this.setState({ First_Name: text }) }} />

                            <TextInput style={styles.formTextInput}
                                placeholder={"Last Name"}
                                maxLength={20}
                                onChangeText={text => { this.setState({ Last_Name: text }) }} />

                            <TextInput style={styles.formTextInput}
                                placeholder={"Address"}
                                multiline={true}
                                onChangeText={text => { this.setState({ Address: text }) }} />

                            <TextInput style={styles.formTextInput}
                                placeholder={"Username"}
                                maxLength={20}
                                onChangeText={text => { this.setState({ Username: text }) }} />

                            <TextInput style={styles.formTextInput}
                                placeholder={"Email"}
                                maxLength={20}
                                onChangeText={text => { this.setState({ Email: text }) }} />

                            <TextInput style={styles.formTextInput}
                                placeholder={"Password"}
                                maxLength={20}
                                onChangeText={text => { this.setState({ Password: text }) }}
                                secureTextEntry={true} />

                            <TextInput style={styles.formTextInput}
                                placeholder={"Confirm Pasword"}
                                maxLength={20}
                                onChangeText={text => { this.setState({ Confirm_Password: text }) }}
                                secureTextEntry={true} />

                            <TextInput style={styles.formTextInput}
                                placeholder={"Phone Number"}
                                maxLength={10}
                                onChangeText={text => { this.setState({ Mobile_Number: text }) }}
                                keyboardType={'numeric'} />

                            <TouchableOpacity onPress={() => { this.userSignUp(this.state.Email, this.state.Password, this.state.Confirm_Password)
                            this.props.navigation.navigate('Donate') }}>
                                <Text>
                                    Sign Up
                                    </Text>
                            </TouchableOpacity>


                            <TouchableOpacity onPress={() => { this.setState({ Is_Modal_Visible: false }) }}>
                                <Text>
                                    Cancel
                                    </Text>
                            </TouchableOpacity>

                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>

            </Modal>
        )


    }

    userSignUp = (email, password, Confirm_Password) => {
        // if (password === Confirm_Password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                // Signed in 
                db.collection("users").add({
                    'First_Name': this.state.First_Name,
                    'Last_Name': this.state.Last_Name,
                    'Email': this.state.Email,
                    'Username': this.state.Username,
                    'Password': this.state.Password,
                    "Confirm_Password": this.state.Confirm_Password,
                    'Number': this.state.Mobile_Number,
                    'Address': this.state.Address
                })
           
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                return Alert.alert(errorMessage)
            });

    }

    userLogin = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                this.props.navigation.navigate('Donate')
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                return Alert.alert(errorMessage)
            });
    }

    render() {
        return (
            <View style={styles.container}>

                {this.showModal()}

                <TextInput placeholder="email address"
                    keyboardType="email-adress"
                    onChangeText={text => { this.setState({ email: text }) }}
                    style={styles.inputBox} />

                <TextInput placeholder="password"
                    secureTextEntry={true}
                    onChangeText={text => { this.setState({ password: text }) }}
                    style={styles.inputBox} />

                <TouchableOpacity onPress={() => { this.userLogin(this.state.email, this.state.password) }} >
                    <Text>
                        Login
                        </Text>
                </TouchableOpacity>
                <Text>
                    If you don't have an account, create one now by signing up!
</Text>
                <TouchableOpacity onPress={() => { this.setState({ Is_Modal_Visible: true }) }}>
                    <Text>
                        Sign Up
                        </Text>
                </TouchableOpacity>
            </View >
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