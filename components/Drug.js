import React from 'react';
import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar, Button, BottomNavigation } from 'react-native-paper';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs, query } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBBVtHwzXobEwmriaUL1RRyi_HkliYK81w",
    authDomain: "test-1ae02.firebaseapp.com",
    projectId: "test-1ae02",
    storageBucket: "test-1ae02.appspot.com",
    messagingSenderId: "656499918293",
    appId: "1:656499918293:web:775d162be96efc723d295c"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default function Drug() {

    const MusicRoute = () => <Text></Text>;

    const AlbumsRoute = () => <Text></Text>;

    const RecentsRoute = () => <Text></Text>;

    function Drug(){

        async function getData(){
            const querySnapshot = await getDocs(collection(db, "drug"));
            querySnapshot.forEach((doc) => {
            alert(`${doc.id} => ${doc.data().name}`);
            });
          }

        const [index, setIndex] = React.useState(0);
        const [routes] = React.useState([
            { key: 'music', title: 'Home', icon: 'home' },
            { key: 'albums', title: 'Calendar', icon: 'calendar' },
            { key: 'recents', title: 'Reminder', icon: 'alarm' },
        ]);

        const renderScene = BottomNavigation.SceneMap({
            music: MusicRoute,
            albums: AlbumsRoute,
            recents: RecentsRoute,
        });

        return(
            <View style={styles.screen}>
                <Appbar.Header>
                    <Appbar.Content title="Patient Name Goes Here"/>
                </Appbar.Header>
                <View style={styles.menu}>
                    <BottomNavigation
                    navigationState={{ index, routes }}
                    onIndexChange={setIndex}
                    renderScene={renderScene}
                    />
                </View>
            </View>
        )
    }

    return (
        <Drug/>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    view: {
        justifyContent: 'center',
    },
    text: {
        fontSize: 25,
        margin: 25,
        textAlign: 'center',
    },
    menu: {
        flex: 1,
        justifyContent: 'flex-end'
    }
})
