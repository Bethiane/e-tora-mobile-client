import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
import { styles } from '../style.js';

export default function ViewCandidates(props) {
    const [candidates, setCandidates] = React.useState([]);
    useEffect(() => {
        axios.get('http://10.0.2.2:5000/api/candidates')
            .then(res => {
                setCandidates(res.data)
            }).catch(err => {
                console.log(err)
            }
            )
    }, []);
    console.log(candidates)
    return (
        <View style={styles.container}>
            <Text></Text>
            {candidates.map(candidate => {
                return (
                    <View key={candidate._id}>
                        <Text>{candidate.firstName + " " + candidate.lastName}</Text>
                        <Text>{candidate.age}</Text>
                        <Text>{candidate.partyId?.name}</Text>
                    </View>
                )
            })
            }
        </View>
    );
}

