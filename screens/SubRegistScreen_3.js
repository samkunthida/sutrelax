import { View, Text, StyleSheet, Image, Dimensions, TextInput} from 'react-native'
import React from 'react'
import { useState } from 'react';
import colors from '../colors'

import GreySQButton from '../components/GreySQButton';
import LightGreySQButton from '../components/LightGreyButton';

//images
import TopBG from '../assets/images/TopBG.png'

const SubRegisterScreen_3 = ({ navigation }) => {

    // Functions
    const nextButton1 = () => {
        navigation.navigate('SubRegistScreen_4')
        //add value
    }
    const nextButton2= () => {
        navigation.navigate('SubRegistScreen_4')
        //add value
    }
    const nextButton3 = () => {
        navigation.navigate('SubRegistScreen_4')
        //add value
    }


    // Screen
    return (
        <View style={styles.container}>
        <View style={styles.contentContainer}>

        <View style={styles.topContainer}>
        <Image source={TopBG} style={styles.backgroundImage1} />
        </View>
            
        <View style={styles.secondContentContainer}> 
            <Text style={styles.topic}>เพศสภาพของคุณ?</Text>
            <View style={styles.buttomContainer} >
            <GreySQButton text = "เพศชาย" onPress={nextButton1}></GreySQButton>
            <GreySQButton text = "เพศหญิง" onPress={nextButton2}></GreySQButton>
            <LightGreySQButton text = "ไม่ระบุ" onPress={nextButton3}></LightGreySQButton>
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
        fontSize: 24,
        color: colors.sut_darkblue,
        textAlign: 'center',
        marginBottom:30,
        marginTop: 155
      },
      backgroundImage1: {
        resizeMode: "contain",
        width: 420,
        height: 925,
        position: 'absolute',
        top: -300,
        left: -210,
      },
      secondContentContainer: {
        height: '100%',
        justifyContent: 'center',
      },

});

export default SubRegisterScreen_3