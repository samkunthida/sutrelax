import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

//import factors
import colors from '../factors/colors'

export default function Button1({ text, onPress, style, disabled }) {
    return (
        <TouchableOpacity
        style={[disabled && styles.buttonDisabled]}
        onPress={onPress}
        disabled={disabled} >
            <View style={[styles.button1, style]}>
                <Text style={styles.buttonText}> { text } </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button1: {
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        height: 45,
        width: 370,
        backgroundColor: colors.sut_primary,
    },
    buttonText: {
        color: colors.sut_white,
        fontSize: 16,
        fontFamily: 'Kanit-Regular',
        textAlign: 'center'
    },
    buttonDisabled: {
        opacity: 0.5,
    },
});
