import React from 'react';
import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

export default function Drug() {

    const firestore = firebase.firestore();

    function Drug(){
        const drugs = firestore.collection('drugs');
        const query = drugs.orderBy('name').limit(1);
        const [datas] = useCollectionData(query, {name: 'arcabose'});

        return(
            <View>
                <View style={styles.view}>{datas && datas.map(data => <View>
                    <Text style={styles.text}>Drug Name : {data.name}</Text>
                    <Text style={styles.text}>Drug Use : {data.use}</Text>
                    <Text style={styles.text}>Possible Side Effects : {data.side_effect}</Text>
                    </View>)}</View>
            </View>
        )
    }

    return (
        <View>
            <Drug/>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        justifyContent: 'center',
    },
    text: {
        fontSize: 25,
        textAlign: 'center',
    }
})
