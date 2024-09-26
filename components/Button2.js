import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

//import factors
import colors from '../factors/colors'

//import dependencies
import { FontAwesome6 } from '@expo/vector-icons';

export default function Button2({ text, onPress, style, disabled, icon, iconColor }) {
    return (
        <TouchableOpacity
            style={[disabled && styles.buttonDisabled]}
            onPress={onPress}
            disabled={disabled} >
            <View style={[styles.button1, style]}>
                <View style={styles.icon}>
                    <FontAwesome6 name={icon} size={20} color={iconColor} />
                </View>
                <Text style={styles.buttonText}> {text} </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button1: {
        flexDirection: 'row',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        height: 45,
        width: 370,
        backgroundColor: colors.sut_white,
        borderColor: colors.sut_darkblue,
        borderWidth: 2,
    },
    buttonText: {
        color: colors.sut_darkblue,
        fontSize: 16,
        fontFamily: 'Kanit-Regular',
        textAlign: 'center'
    },
    buttonDisabled: {
        opacity: 0.5,
    },
    icon: {
        position: 'absolute',  // Keep the icon in a fixed position on the left
        left: 20,
    }
});
