import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

//import factors
import colors from '../factors/colors'

export default function LightGreySQButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} >
            <View style={styles.button1}>
                <Text style={styles.buttonText}> { text } </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button1: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        height: 45,
        width: 370,
        backgroundColor: colors.sut_lightgrey,
    },
    buttonText: {
        color: colors.sut_white,
        fontSize: 16,
        fontFamily: 'Kanit-Regular',
        textAlign: 'center'
    }
});
