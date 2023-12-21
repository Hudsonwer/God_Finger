import React from 'react';
import { StyleSheet, View, Text } from "react-native";

const Descricao = () => {

    return (
        <View style={styles.Fundo}>
            <Text  style={styles.Texto}>
                A API do Vagalume é uma interface de programação de aplicativos que permite a integração de serviços e informações fornecidas pelo Vagalume, um dos maiores portais de música da internet. Essa API oferece aos desenvolvedores a capacidade de acessar dados relacionados a letras de músicas, artistas, álbuns e outras informações musicais diretamente em suas próprias aplicações, sites ou serviços.
                A principal funcionalidade da API do Vagalume gira em torno do acesso às letras de músicas. Os desenvolvedores podem fazer solicitações para a API, fornecendo informações como o nome da música ou o nome do artista, e em troca, recebem dados estruturados contendo a letra da música desejada. Isso permite a criação de aplicativos ou recursos que incorporam automaticamente as letras de músicas, proporcionando uma experiência mais rica e envolvente para os usuários.
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    Fundo: {
        backgroundColor: "#09C9D6",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    Texto: {
        padding: 20,
    }
});

export default Descricao