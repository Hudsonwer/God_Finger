import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Favorite from '../screen/Favorite';

const { Navigator, Screen } = createBottomTabNavigator();

export function MyTabs() {

    return (
        <NavigationContainer>
            <Navigator>
                <Screen name="Musicas" component={Home} />
                <Screen name="Musicas Favoritadas" component={Favorite} />
            </Navigator>
        </NavigationContainer>
    );
}