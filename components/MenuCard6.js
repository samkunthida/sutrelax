import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

//import factors
import colors from '../factors/colors'

export default function MenuCard6({ topic, onPress, style }) {

    return (
        <TouchableOpacity onPress={onPress} >
            <View style={[styles.button1, style]}>
                <View style={styles.textContainer}>
                <Text style={styles.topic}>{topic}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button1: {
        justifyContent: 'left',
        paddingHorizontal: 10,
        height: 75,
        width: 500,
        backgroundColor: colors.sut_white,
        flexDirection: 'row',
        borderBottomWidth: 0.2,
        borderColor: colors.sut_darkgrey,
    },
    textContainer: {
        flex:1,
        paddingLeft: 50,
        alignSelf: 'center',
        marginRight: 100,
    },
    topic:{
        fontFamily: 'Kanit-Regular',
        fontSize: 16,
        color: colors.sut_darkblue,
    },
});
