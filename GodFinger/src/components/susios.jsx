import React from 'react';
import { StyleSheet, View, Image } from "react-native";

const Susios = async ({artista}) => {

    let ImagemArtista = await (await fetch("https://api.vagalume.com.br/image.php?bandID=" + artista + "&limit=3&apikey=d4c1901c0b03343aee8cdfa11562d0c0")).json()

    return (
        <View>
            <Image
                style={styles.imagem}
                source={{
                    uri: ImagemArtista.images[0].url,
                }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    imagem: {
        width: 66,
        height: 66,
    },
});

export default Susios