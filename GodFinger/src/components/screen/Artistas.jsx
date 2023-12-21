import React from 'react';
import { StyleSheet, View } from "react-native";
import SearchButton from '../SearchButton';
import Cantor from '../Cantor';
import { useState } from 'react';

const Artistas = () => {

    const [SearchTreated, setSearchTreated] = useState('')
    return (
            <View style={styles.Fundo}>
                <SearchButton setS={setSearchTreated}></SearchButton>
                <Cantor artistaNome={SearchTreated}></Cantor>
            </View>
    )
}
const styles = StyleSheet.create({
    Fundo: {
        backgroundColor: "#09C9D6",
        height: "100%",
    },
});

export default Artistas