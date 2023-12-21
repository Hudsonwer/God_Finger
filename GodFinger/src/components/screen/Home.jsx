import React from 'react';
import { StyleSheet, View } from "react-native";
import SearchButton from '../SearchButton';
import Cantor from '../Cantor';
import { useState } from 'react';

const Home = () => {

    const [SearchTreated, setSearchTreated] = useState('')
    return (
            <View style={styles.Background}>
                <SearchButton setSearchTreated={setSearchTreated}></SearchButton>
                <Cantor artistaNome={SearchTreated}></Cantor>
            </View>
    )
}
const styles = StyleSheet.create({
    Background: {
        backgroundColor: "09C9D6",
    },

});

export default Home