import React, {useState} from 'react';
import { styles } from '../style.js';
import axios from 'axios';
import { Text, View, Image, TouchableOpacity, ScrollView, TextInput, Button, Alert } from 'react-native';

export default function SignInScreen({navigation}) {
    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    const handleSubmit = async () => {
        await axios.post('http://10.0.2.2:5000/api/user/login', values)
            .then(res => {
                console.log(res.data)
                navigation.navigate('ViewCandidates')
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

        <Text style={styles.title}>Sign In</Text>

        <View style={styles.input}>
            <TextInput placeholder='Enter your email'  value={values.email} onChangeText={(value) => handleChange('email', value)}/>
        </View>
 
        <View style={styles.input}>
            <TextInput placeholder='Enter your password' secureTextEntry={true} value={values.password} onChangeText={(value) => handleChange('password', value)} />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => handleSubmit()} >
            <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
        </View>
     
    </View>
    );
}

