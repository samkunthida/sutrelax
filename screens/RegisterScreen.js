import { View, Text, StyleSheet, Image, Dimensions, TextInput} from 'react-native'
import React from 'react'
import { useState } from 'react';

//import factors
import colors from '../factors/colors'
import stringTH from '../factors/strings'

//import components
import Button1 from '../components/Button1';

const RegisterScreen = ({ navigation }) => {

    // Functions
    const RegisterButton = () => {
        navigation.navigate('RegSubStack')
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
                placeholder={stringTH.password}
                placeholderTextColor={colors.sut_grey7d}
                secureTextEntry={true} />
                <TextInput style={styles.textinput1}
                placeholder={stringTH.passwordConfirm}
                placeholderTextColor={colors.sut_grey7d}
                secureTextEntry={true} />

                <Button1 text={stringTH.sentToEmail} onPress={RegisterButton}></Button1>
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

export default RegisterScreen