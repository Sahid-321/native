import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config";
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
    const navigation = useNavigation();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const login = ()=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            Alert.alert('User Login success')

        navigation.replace('Home')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          Alert.alert(errorMessage)
        });
    }

    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <View>
                <TextInput onChangeText={text=> setEmail(text)} style={styles.input} placeholder="Enter Email" />
             
                <TextInput onChangeText={text=> setPassword(text)} style={styles.input} placeholder="Password" />
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={login}>
                    <Text>Login</Text>
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

export default LoginScreen;