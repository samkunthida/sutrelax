import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native'

//import factors
import colors from '../factors/colors'
import images from '../factors/images';

export default function ImageCard({ text, onPress, style, image }) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.card, style]}>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.image} />
            </View>
            <Text style={styles.cardText}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.sut_white,
        margin: 10,
        width: 165,
        alignItems: 'flex-start',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    imageContainer: {
        width: '100%', // Match the width of the parent
        height: 100,
        overflow: 'hidden',
        borderRadius: 10,
        
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    cardText: {
        color: colors.sut_darkblue,
        fontSize: 14,
        fontFamily: 'Kanit-Medium',
        textAlign: 'left',
        paddingLeft: 5,
        marginTop: 5,
    },
});
