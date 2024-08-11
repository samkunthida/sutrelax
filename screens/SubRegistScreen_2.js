import { View, Text, StyleSheet, Image, Dimensions, TextInput} from 'react-native'
import React from 'react'
import { useState } from 'react';
import colors from '../colors'

import OrangeButton from '../components/orangeButton'
import OrangeButtonDefault from '../components/orangeButtonDefault';

const SubRegisterScreen_2 = ({ navigation }) => {

    // Functions
    const nextButton = () => {
        navigation.navigate('SubRegistScreen_3')
    }

    // Screen
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>

                <Text style={styles.topic}>คุณชื่ออะไร?</Text>
                
                <View style={styles.textInputContainer}>
                <TextInput style={styles.textinput1}
                placeholder='ชื่อ'
                placeholderTextColor={colors.sut_grey7d}
                />
                <TextInput style={styles.textinput1}
                placeholder='นามสกุล (ไม่ต้องระบุก็ได้)'
                placeholderTextColor={colors.sut_grey7d}
                />
                </View>

                <View style={styles.buttonContainer}>
                <OrangeButtonDefault text='โอเค!' onPress={nextButton}></OrangeButtonDefault>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.sut_white,
        alignItems: 'center',
        alignContent: 'center'
      },
      contentContainer: {
        width: '100%',
        paddingTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
      },
      topic: {
        fontFamily: 'Kanit-Regular',
        fontSize: 24,
        color: colors.sut_darkblue,
        textAlign: 'center'
      },
      topicContainer: {
        
      },
      buttonContainer: {
        marginTop: 60,
        alignItems: 'center'
      },
      textinput1: {
        borderColor: colors.sut_grey7d,
        borderWidth: 1,
        height: 45,
        width: 370,
        borderRadius: 10,
        paddingLeft: 15,
        marginBottom: 15,
        color: colors.sut_white,
        fontFamily: 'Kanit-Regular',
        fontSize: 16
      },
      textInputContainer: {
        marginTop: 30,
        alignItems: 'center'
      }
});

export default SubRegisterScreen_2