import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

//import factors
import colors from '../factors/colors'

export default function MenuCard4({ topic, point, maxPoint, date, onPress, style, icon, iconColor }) {

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        const options = {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        };
        return date.toLocaleDateString('th-TH', options);
    };

    return (
        <TouchableOpacity onPress={onPress} >
            <View style={[styles.button1, style]}>
                <View style={styles.textContainer}>
                <Text style={styles.topic}>{topic}</Text>
                <Text style={styles.content}>{point} คะแนน จาก {maxPoint}</Text>
                <View style={styles.dateContainer}>
                <Text style={styles.dateText}>เมื่อ {formatDate(date)}</Text>
                </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button1: {
        justifyContent: 'left',
        paddingHorizontal: 10,
        height: 100,
        width: 500,
        backgroundColor: colors.sut_white,
        flexDirection: 'row',
        borderBottomWidth: 0.2,
        borderColor: colors.sut_darkgrey,
    },
    buttonText: {
        color: colors.sut_white,
        fontSize: 16,
        fontFamily: 'Kanit-Regular',
        textAlign: 'left',
        marginLeft: 10,
        textAlignVertical: 'center'
    },
    textContainer: {
        flex:1,
        paddingLeft: 10,
        paddingVertical: 15,
        marginRight: 100,
    },
    topic:{
        fontFamily: 'Kanit-Medium',
        fontSize: 18,
        color: colors.sut_darkblue,
    },
    content:{
        fontFamily: 'Kanit-Medium',
        fontSize: 14,
        color: colors.sut_grey7d,
    },
    dateText:{
        fontFamily: 'Kanit-Regular',
        fontSize: 14,
        color: colors.sut_grey7d,
        alignSelf: 'flex-end',
    },
    dateContainer:{
        alignSelf: 'flex-end',
        flexDirection: 'row',
    }
});
