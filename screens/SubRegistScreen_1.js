import { View, Text, StyleSheet, Image, Dimensions, TextInput} from 'react-native'
import React from 'react'
import { useState } from 'react';
import colors from '../colors'

import Button1 from '../components/Button1';

//images
import TopBG from '../assets/images/TopBG.png'

const SubRegisterScreen_1 = ({ navigation }) => {

    // Functions
    const nextButton = () => {
        navigation.navigate('SubRegistScreen_2')
    }

    // Screen
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>

        <View style={styles.topContainer}>
        <Image source={TopBG} style={styles.backgroundImage1} />
        </View>
        
        <View style={styles.secondContentContainer}>
        <Text style={styles.topic}>ก่อนเริ่มใช้งาน{'\n'}เราต้องการทราบข้อมูลของคุณเบื้องต้น</Text> 
        <View style={styles.buttonContainer}>
        <Button1 text='โอเค!' onPress={nextButton}></Button1>
        </View>
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
      secondContentContainer: {
        height: '100%',
        justifyContent: 'flex-end',
      },
      buttonContainer: {
        marginTop: 250,
        alignItems: 'center',
        marginBottom: 65
      },
      backgroundImage1: {
        resizeMode: "contain",
        width: 420,
        height: 925,
        position: 'absolute',
        top: -300,
        left: -210,
      },
});

export default SubRegisterScreen_1