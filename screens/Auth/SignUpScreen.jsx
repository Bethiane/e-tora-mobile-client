import React, { useState } from 'react';
import { styles } from '../style.js';
import { Text, View, Image, TouchableOpacity, ScrollView, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

export default function SignUpScreen({ navigation }) {

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        telephone: '',
        password: '',
    })


    const handleSubmit = async () => {
        await axios.post('http://10.0.2.2:5000/api/user/register', values)
            .then(res => {
                console.log(res.data)
                navigation.navigate('SignIn')
            }
            ).catch(err => {
                Alert.alert(err.response.data)
            }
            )
    }

    const handleChange = (name, value) => {
        setValues({
            ...values,
            [name]: value
        })

    }


    return (
        <View style={styles.container}>
            <View style={styles.form}>

                <Text style={styles.title}>Sign Up</Text>

                <View style={styles.input}>
                    <TextInput placeholder='Enter your firstname' value={values.firstName} onChangeText={(value) => handleChange('firstName', value)} />
                </View>
                <View style={styles.input}>
                    <TextInput placeholder='Enter your lastname' value={values.lastName} onChangeText={(value) => handleChange('lastName', value)} />
                </View>
                <View style={styles.input}>
                    <TextInput placeholder='Enter your email' value={values.email} onChangeText={(value) => handleChange('email', value)} />
                </View>
                <View style={styles.input}>
                    <TextInput placeholder='Enter your telephone' value={values.telephone} onChangeText={(value) => handleChange('telephone', value)} />
                </View>
                <View style={styles.input}>
                    <TextInput placeholder='Enter your password' secureTextEntry={true} value={values.password} onChangeText={(value) => handleChange('password', value)} />
                </View>

                <TouchableOpacity style={styles.button} onPress={() => handleSubmit()} >
                    <Text style={styles.button}>Submit</Text>
                </TouchableOpacity>
            </View>

        </View>

    )
}
