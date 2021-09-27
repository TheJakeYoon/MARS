import React from 'react';
import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar, Button, BottomNavigation } from 'react-native-paper';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

export default function Drug() {

    const firestore = firebase.firestore();

    const MusicRoute = () => <Text></Text>;

    const AlbumsRoute = () => <Text></Text>;

    const RecentsRoute = () => <Text></Text>;

    function Drug(){
        const drugs = firestore.collection('drugs');
        const query = drugs.orderBy('name').limit(1);
        const [datas] = useCollectionData(query, {name: 'arcabose'});

        const [index, setIndex] = React.useState(0);
        const [routes] = React.useState([
            { key: 'music', title: 'Music', icon: 'queue-music' },
            { key: 'albums', title: 'Albums', icon: 'album' },
            { key: 'recents', title: 'Recents', icon: 'history' },
        ]);

        const renderScene = BottomNavigation.SceneMap({
            music: MusicRoute,
            albums: AlbumsRoute,
            recents: RecentsRoute,
        });

        return(
            <View style={styles.screen}>
                <Appbar.Header>
                    <Appbar.Content title={datas && datas[0].name}/>
                </Appbar.Header>
                <View style={styles.view}>{datas && datas.map(data => <View>
                    <Text style={styles.text}>Drug Name : {data.name}</Text>
                    <Text style={styles.text}>Drug Use : {data.use}</Text>
                    <Text style={styles.text}>Possible Side Effects : {data.side_effect}</Text>
                    </View>)}
                </View>
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
        textAlign: 'center',
    },
    menu: {
        flex: 1,
        justifyContent: 'flex-end'
    }
})
