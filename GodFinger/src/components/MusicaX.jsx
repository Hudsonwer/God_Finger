import React from 'react';
import { View, Text } from "react-native";
import { useEffect, useState } from 'react';
import styles from "./MusicaX.module";

const MusicaX = ({ artista }) => {
    const [Quantidade, setQuantidade] = useState("")
    const [Musga, setMusga] = useState("")

    useEffect(() => {
        async function getMusica() {
            let Musica = await (await fetch("https://api.vagalume.com.br/search.excerpt?q=" + artista + "&limit=5")).json()
            setQuantidade(Musica.response.numFound)
            setMusga(Musica)
        }
        getMusica()
    }, [artista])
    if (!Musga) {
        return <Text>Bla</Text>
    }
console.log("aaaa",Musga.response.docs)
    return (
        <View>
            <Text style={styles.Quantidade}>numero de bandas e musicas encontradas - {Quantidade}</Text>
                {Musga.response.docs.map((value) => {
                    return (<View style={styles.musicaInfo} key={value.id}>
                        <Text>Título da musica - {value.title}</Text>
                        <Text>Banda - {value.band}</Text>
                    </View>);
                })}
        </View>
    )
}

export default MusicaX