import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Artistas from '../screen/Artistas';
import Musicas from '../screen/Musicas';
import Descricao from '../screen/DescricaoApi';

const { Navigator, Screen } = createBottomTabNavigator();

export function MyTabs() {

    return (
        <NavigationContainer>
            <Navigator>
                <Screen name="Artistas" component={Artistas} />
                <Screen name="Musicas" component={Musicas} />
                <Screen name="Descricao" component={Descricao} />
            </Navigator>
        </NavigationContainer>
    );
}