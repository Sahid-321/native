import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config";
import { useNavigation } from '@react-navigation/native';

const Register = () => {
    const navigation = useNavigation();

    const[email, setEmail] = useState('');
    const[fName, setfName] = useState('');

    const[lName, setlName] = useState('');

    const[password, setPassword] = useState('');

    const handleRegister = ()=>{
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    Alert.alert('signup Succes')
    navigation.replace('Login')

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Alert.alert(errorMessage)
    // ..
  });
    }

    return (
        <View style={styles.container}>
            <Text>Register</Text>
            <View>
                <TextInput onChangeText={text=> setEmail(text)} style={styles.input} placeholder="Enter Email" />
                <TextInput onChangeText={text=> setfName(text)} style={styles.input} placeholder="First Name" />

                <TextInput onChangeText={text=> setlName(text)} style={styles.input} placeholder="Last Name" />

                <TextInput onChangeText={text=> setPassword(text)} style={styles.input} placeholder="Password" />
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '90%',
        borderBottomWidth: 1,

    },
    button: {
        width: '90%',
        alignItems: 'center',
        backgroundColor: '#00ffff',
        padding: 10,
        borderRadius: 10
    },
})
export default Register