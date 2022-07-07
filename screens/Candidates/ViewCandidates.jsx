import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios'

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
        <View>
            <Text>PDS Candidate</Text>
            {candidates.map(candidate => {
                return (
                    <View key={candidate._id}>
                        <Text>{candidate.firstName + " " + candidate.lastName}</Text>
                        <Text>{candidate.age}</Text>
                    </View>
                )
            })
            }
        </View>
    );
}

