import React from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import { useEffect, useState } from 'react';
import ImagemArtista from './ImagemArtista';
import styles from "./MusicaX.module";

const MusicaX = ({ artista }) => {
    const [Quantidade, setQuantidade] = useState("")
    const [Id, setId] = useState("")

    useEffect(() => {
        async function getMusica() {
            let Musica = await (await fetch("https://api.vagalume.com.br/search.art?q=" + artista + "&limit=5")).json()
            setQuantidade(Musica.response.numFound)
            let ImagemName = await (await fetch("https://www.vagalume.com.br/" + Musica.response.docs[0].band + "/index.js")).json()
            setId(ImagemName.artist.id)
        }
        getMusica()
    })

    return (
        <View>
           <Text style={styles.Quantidade}>Numero de músicas encontradas - {Quantidade}</Text>
           <ImagemArtista artista={Id}></ImagemArtista>
           <Text>{Id}</Text>
        </View>
    )
}

export default MusicaX