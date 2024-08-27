import { View, Text, StyleSheet, Image, Dimensions, TextInput} from 'react-native'
import React from 'react'
import { useState } from 'react';
import colors from '../colors'
import stringTH from '../string';

import Button1 from '../components/Button1';
import TextButton from '../components/TextButton';

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
                placeholder={stringTH.email}
                placeholderTextColor={colors.sut_grey7d}
                keyboardType='email-address' />

                <TextInput style={styles.textinput1}
                placeholder= {stringTH.password}
                placeholderTextColor={colors.sut_grey7d}
                secureTextEntry={true} />

                <View style={styles.textButtonContainer}>
                <TextButton text= {stringTH.forgetPassword} onPress={ForgetButton}></TextButton>
                </View>

                <Button1 text={stringTH.login} onPress={LoginButton}></Button1>
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