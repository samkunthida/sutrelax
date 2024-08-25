import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

import colors from '../colors'

export default function MenuCard1({ text, onPress, style }) {
    return (
        <TouchableOpacity onPress={onPress} >
            <View style={[styles.button1, style]}>
                <Text style={styles.buttonText}> { text } </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button1: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'left',
        paddingHorizontal: 10,
        height: 100,
        width: 370,
        marginVertical: 10,
        backgroundColor: colors.sut_primary,
    },
    buttonText: {
        color: colors.sut_white,
        fontSize: 16,
        fontFamily: 'Kanit-Regular',
        textAlign: 'left',
    }
});
