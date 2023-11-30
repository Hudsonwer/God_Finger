import React from 'react';
import styles from './Navbar.module.js'
import { View, Image } from 'react-native';

const Navbar = () => {
    return (
        <View>
            <View>
                <Image
                    style={styles.Navimage}
                    source={require('../assets/bestiario.png')}
                />
            </View>
        </View>
    )
}

export default Navbar