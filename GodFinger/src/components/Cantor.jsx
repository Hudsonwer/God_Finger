import React from 'react';
import { StyleSheet, View } from "react-native";
import { useEffect, useState } from 'react';
import ImagemArtista from './ImagemArtista';

const Cantor = ({artistaNome}) => {
    const [Id, setId] = useState('')

    useEffect(() => {
        async function getImagem() {
            let ImagemName = await (await fetch("https://www.vagalume.com.br/" + artistaNome + "/index.js")).json()
            setId(ImagemName.artist.id)
        }
        getImagem()
    })


    return (
        <View>
            {artistaNome && <ImagemArtista artista={Id}></ImagemArtista>}
        </View>
    )
}

export default Cantor