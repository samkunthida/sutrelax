import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

//import factors
import colors from '../factors/colors'
import { FontAwesome6 } from '@expo/vector-icons';

export default function MenuCard3({ text, onPress, style, icon, iconColor }) {
    return (
        <TouchableOpacity onPress={onPress} >
            <View style={[styles.button1, style]}>
                <View style={styles.iconContainer}>
                <FontAwesome6 name={icon} size={60} color={iconColor} />
                </View>
                <Text style={styles.buttonText}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button1: {
        borderRadius: 10,
        justifyContent: 'left',
        paddingHorizontal: 10,
        height: 60,
        width: 370,
        marginVertical: 10,
        backgroundColor: colors.sut_brown,
        flexDirection: 'row',
    },
    buttonText: {
        color: colors.sut_white,
        fontSize: 16,
        fontFamily: 'Kanit-Regular',
        textAlign: 'left',
        marginLeft: 10,
        textAlignVertical: 'center'
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});