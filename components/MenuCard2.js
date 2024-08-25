import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

import colors from '../colors'

export default function MenuCard2({ text, onPress, style }) {
    return (
        <TouchableOpacity onPress={onPress} >
            <View style={[styles.button1, style]}>
 
            </View>
            <View style={styles.textContainer}>
            <Text style={styles.text1}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button1: {
        borderRadius: 10,
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 104,
        width: 104,
        marginTop: 10,
        marginBottom: 5,
        backgroundColor: colors.sut_primary,
    },
    buttonText: {
        color: colors.sut_white,
        fontSize: 16,
        fontFamily: 'Kanit-Regular',
        textAlign: 'left',
    },
    text1: {
        fontFamily: 'Kanit-Regular',
        textAlign: 'center',
        color: colors.sut_darkblue
    },
    textContainer: {

    }
});
