import { View, Text, StyleSheet, Image, Dimensions, TextInput} from 'react-native'
import React from 'react'
import { useState } from 'react';
import colors from '../colors'

import OrangeButton from '../components/orangeButton'
import OrangeButtonDefault from '../components/orangeButtonDefault';

const SubRegisterScreen_1 = ({ navigation }) => {

    // Functions
    const nextButton = () => {
        navigation.navigate('SubRegistScreen_2')
    }

    // Screen
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>

                <Text style={styles.topic}>ก่อนเริ่มใช้งาน{'\n'}เราต้องการทราบข้อมูลของคุณเบื้องต้น</Text>
                
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
        fontSize: 20,
        color: colors.sut_darkblue,
        textAlign: 'center'
      },
      topicContainer: {
        
      },
      buttonContainer: {
        marginTop: 60,
        alignItems: 'center'
      }
});

export default SubRegisterScreen_1