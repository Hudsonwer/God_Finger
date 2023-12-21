import React from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import { useEffect, useState } from 'react';
import ImagemArtista from './ImagemArtista';
import styles from "./Cantor.module";

const Cantor = ({ artistaNome }) => {
    const [Id, setId] = useState()
    const [Rank, setRank] = useState("")

    useEffect(() => {
        async function getImagem() {
            let ImagemName = await (await fetch("https://www.vagalume.com.br/" + artistaNome + "/index.js")).json()
            setId(ImagemName.artist.id)
            setRank(ImagemName.artist.rank.pos)
        }
        getImagem()

    })

    function NewGuia() {
        
    }


    return (
        <View>
            {
                artistaNome && Id &&
                <View>
                    <View style={styles.cantor}>
                        <ImagemArtista artista={Id}></ImagemArtista>
                        <View style={styles.cantorDetails}>
                            <Text style={styles.NomeCantor}>{artistaNome}</Text>
                            <View style={styles.DescricaoeBotao}>
                                <View>
                                    <Text>Posição Mundial</Text>
                                    <Text style={styles.cantorDetails2}>{Rank ?? "sem posição"}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.Line}>
                        -------------------------------------------------------------------
                    </Text>
                </View>
            }
        </View>
    )
}

export default Cantor