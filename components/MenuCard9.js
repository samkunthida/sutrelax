import React, { Component, useState} from 'react'
import { StyleSheet,Switch, TouchableOpacity, Text, View } from 'react-native'

//import factors
import colors from '../factors/colors'

export default function MenuCard9({ topic, content, onPress, style }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (

            <View style={[styles.button1, style]}>
                <View style={styles.textContainer}>
                <Text style={styles.topic}>{topic}</Text>
                <Switch
          trackColor={{false: colors.sut_lightgrey2, true: colors.sut_darkblue}}
          thumbColor={isEnabled ? colors.sut_lightblue : colors.sut_lightblue}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={styles.switch1}
        />
                </View>
            </View>

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
        paddingLeft: 10,
        paddingVertical: 15,
        marginRight: 100,
        justifyContent: 'center',
    },
    topic:{
        fontFamily: 'Kanit-Regular',
        fontSize: 16,
        color: colors.sut_darkblue,
    },
    content:{
        fontFamily: 'Kanit-Regular',
        fontSize: 16,
        color: colors.sut_grey7d,
    },
    switch1: {
        position: 'absolute',
        right: 10,
    }
});
