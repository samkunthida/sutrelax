import { View, Text, StyleSheet, Image, Dimensions, TextInput} from 'react-native'
import React from 'react'
import { useState } from 'react';
import colors from '../colors'

import OrangeButton from '../components/orangeButton'
import OrangeButtonDefault from '../components/orangeButtonDefault';
import BlueTextButton from '../components/blueTextButton';

const LoginScreen = ({ navigation }) => {

    // Functions
    const LoginButton = () => {
        navigation.navigate('HomeStack')
    }
    const ForgetButton = () => {
        navigation.navigate('ForgetPasswordScreen')
    }

    // Screen
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>

                <TextInput style={styles.textinput1}
                placeholder='อีเมล'
                placeholderTextColor={colors.sut_grey7d}
                keyboardType='email-address' />
                <TextInput style={styles.textinput1}
                placeholder='รหัสผ่าน'
                placeholderTextColor={colors.sut_grey7d}
                secureTextEntry={true} />

                <View style={styles.textButtonContainer}>
                <BlueTextButton text= "ลืมรหัสผ่าน" onPress={ForgetButton}></BlueTextButton>
                </View>

                <OrangeButtonDefault text='เข้าสู่ระบบ' onPress={LoginButton}></OrangeButtonDefault>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.sut_darkblue,
        alignItems: 'center',
        alignContent: 'center'
      },
      contentContainer: {
        width: '100%',
        paddingTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
      },
      textButtonContainer:{
        width: '100%',
        justifyContent: 'center',
        marginLeft: 30,
        marginBottom: 15
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
      }
      


});

export default LoginScreen