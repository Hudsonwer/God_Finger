import React from 'react';
import { StyleSheet, View, Image } from "react-native";
import { useEffect, useState } from 'react';

const ImagemArtista = ({ artista }) => {
    const [url, setUrl] = useState('')

    useEffect(() => {
        async function getImagem() {
            let ImagemArtista = await (await fetch("https://api.vagalume.com.br/image.php?bandID=" + artista + "&limit=3&apikey=d4c1901c0b03343aee8cdfa11562d0c0")).json()
            setUrl(ImagemArtista.images[0].url)
        }
        getImagem()
    })

    return (
        <View>
            <Image
                style={styles.imagem}
                source={{
                    uri: url,
                }} />
        </View>
    )
}

const styles = StyleSheet.create({
    imagem: {
        width: 80,
        height: 80,
        borderRadius: 999999999999,
        margin: 10,
    },
});

export default ImagemArtista