import React from 'react';
import { Text,View } from 'react-native';


export default function AddCandidate(props) {
    return (
        <View style={styles.container}>
        <View style={styles.form}>

            <Text style={styles.title}>Sign Up</Text>

            <View style={styles.input}>
                <TextInput placeholder='Enter the candidate name' value={values.firstName} onChangeText={(value) => handleChange('firstName', value)} />
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
    );
}

