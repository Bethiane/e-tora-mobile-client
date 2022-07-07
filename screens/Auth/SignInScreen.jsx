import React from 'react';
import { styles } from '../style.js';
import { Text, View, Image, TouchableOpacity, ScrollView, TextInput, Button } from 'react-native';

export default function SignInScreen(props) {
    return (
        <View style={styles.container}>
        <View style={styles.form}>

        <Text style={styles.title}>Sign Up</Text>

        <View style={styles.input}>
            <TextInput placeholder='Enter your email' />
        </View>
 
        <View style={styles.input}>
            <TextInput placeholder='Enter your password' secureTextEntry={true} />
        </View>

        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("SignIn")} >
            <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
        </View>
     
    </View>
    );
}

