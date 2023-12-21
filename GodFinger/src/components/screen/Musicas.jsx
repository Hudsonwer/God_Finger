import React from 'react';
import { StyleSheet, View } from "react-native";
import SearchButton from '../SearchButton';
import MusicaX from '../MusicaX';
import { useState } from 'react';

const Musicas = () => {

    const [SearchTreated2, setSearchTreated2] = useState('')
    return (
            <View style={styles.Fundo}>
                <SearchButton setS={setSearchTreated2}></SearchButton>
                <MusicaX artista={SearchTreated2}></MusicaX>
            </View>
    )
}
const styles = StyleSheet.create({
    Fundo: {
        backgroundColor: "#09C9D6",
        height: "100%",
    },
});

export default Musicas