import { View, Text, StyleSheet, Image, Dimensions, TextInput} from 'react-native'
import React from 'react'
import { useState } from 'react';
import colors from '../colors'

import Button2 from '../components/Button2'
import Button1 from '../components/Button1';

const Screen = ({ navigation }) => {

    // Functions
    const a = () => {
        navigation.navigate('a')
    }

    // Screen
    return (
        <View style={styles.container}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.sut_darkblue,
        alignItems: 'center',
        alignContent: 'center'
      }
});

export default Screen