import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

import colors from '../colors'

export default function TextButton({ text, onPress,style }) {
    return (
        <TouchableOpacity onPress={onPress} >
            <View style={[styles.textButton, style]}>
                <Text style={styles.buttonText}> { text } </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    textButton1: {
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 20,
        width: 370,
        marginVertical: 10,
    },
    buttonText: {
        color: colors.sut_blueText,
        fontSize: 16,
        fontFamily: 'Kanit-Regular',
        textAlign: 'left',
        width: '100%'
    }
});
