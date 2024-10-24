import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native'

//import factors
import colors from '../factors/colors'
import images from '../factors/images'

export default function MenuCard5({ topic, date, onPress, style, icon, iconColor }) {

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        const options = {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        };
        return date.toLocaleDateString('th-TH', options);
    };
    const profileImage = images.PROFILEIMAGE;

    return (
        <TouchableOpacity onPress={onPress} >
            <View style={[styles.button1, style]}>
                
                    <View style={styles.profileImageContainer}>
                    <Image source={profileImage} style={styles.profileImage} />
                    </View>
                <View style={styles.textContainer}>
                <Text style={styles.topic}>{topic}</Text>
                <View style={styles.dateContainer}>
                <Text style={styles.dateText}>โพสต์เมื่อ {formatDate(date)}</Text>
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
        width: '100%',
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
        paddingLeft: 15,
        paddingRight: 15,
        paddingVertical: 15,
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
        marginTop: 20
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: colors.sut_darkbrown,
      },
    profileImageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});
