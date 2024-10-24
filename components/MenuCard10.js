import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native'

//import factors
import colors from '../factors/colors'
import images from '../factors/images';

export default function MenuCard10({ text, onPress, style, image, desc }) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.card, style]}>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.cardText}>{text}</Text>
                <Text style={styles.descText}>{desc}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.sut_white,
        marginHorizontal: 10,
        marginVertical: 5,
        width: 'auto', // Adjust as needed
        height: 100,
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.sut_lightgrey,
    },
    imageContainer: {
        width: 100, // Fixed square size for the image
        height: 100,
        padding: 1,
        justifyContent: 'center',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderColor: colors.sut_lightgrey
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    textContainer: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: 'center',
    },
    cardText: {
        color: colors.sut_darkblue,
        fontSize: 14,
        fontFamily: 'Kanit-Medium',
    },
    descText: {
        color: colors.sut_darkgray,
        fontSize: 12,
        fontFamily: 'Kanit-Regular',
        marginTop: 4,
    },
});
