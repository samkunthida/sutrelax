import { View, Text, StyleSheet, Image, Dimensions, TextInput} from 'react-native'
import React from 'react'
import { useState } from 'react';

//import libs
import axios from 'axios'; 

//import factors
import colors from '../factors/colors'
import stringTH from '../factors/strings'

//import components
import Button1 from '../components/Button1';
import { Feather } from '@expo/vector-icons';

const RegisterScreen = ({ navigation }) => {

    // Variables
    const [email, setEmail] = useState('');
    const [emailVerify, setEmailVerify] = useState('false');
    const [password, setPassword] = useState('');
    const [passwordVerify, setPasswordVerify] = useState('false');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [passwordComfirmVerify, setPasswordConfirmVerify] = useState('false');

    // Verify true = valid && false = invalid
    // Email Text Input Handle
    const handleEmail = (text) => {
        setEmail(text);
    };
    // Email Validation
    const validateEmail = () => {
        if (/^[\w.%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            setEmailVerify(true);
        } else {
            setEmailVerify(false);
        }
    };
    // Password Text Input Handle
    const handlePassword = (text) => {
        setPassword(text);
    };
    // Password Validation
    const validatePassword = () => {
        if (password.length >= 8) {
            setPasswordVerify(true);
        }else{
            setPasswordVerify(false);
        }
    };
    // Password Comfirm Text Input Handle
    const handlePasswordConfirm = (text) => {
        setPasswordConfirm(text)
    };
    // Password Confirm Validation
    const validatePasswordConfirm = () =>{

    }

    // Button Register Handle
    const handleRegister = async () => {
        if (password !== passwordConfirm){
            Alert.alert(stringTH.passwordNotMatch)
        } else {

        const userData = {
            firstName: "",
            lastName: "",
            profileImage: "",
            dateOfBirth: new Date(),
            gender: "unknown",
            dateCreatedAccount: new Date(),
            email,
            password
        }

        if(emailVerify && passwordVerify && passwordComfirmVerify){
        //http://192.168.1.42/
        //http://localhost:8000/
        // Post UserData
            axios
            .post("http://192.168.1.42:8000/registerUser", userData)
            .then(res => {console.log(res.data)
                if(res.data.status=="ok"){
                    alert(stringTH.createdAccount)
                    navigation.navigate('RegSubStack');
                }else{
                    alert(JSON.stringify(res.data));
                }
            })
            .catch( e => console.log(e))
        }else{
            alert(stringTH.fillEmailPassword)
        }

        }
        
    }
    // Screen
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>

                <TextInput style={[styles.textinput1, !emailVerify && styles.invalidInput]}
                placeholder={stringTH.email}
                placeholderTextColor={colors.sut_grey7d}
                keyboardType='email-address'
                value={email}
                onChangeText={handleEmail}
                onBlur={validateEmail} />

                <TextInput style={styles.textinput1}
                placeholder={stringTH.password}
                placeholderTextColor={colors.sut_grey7d}
                secureTextEntry={true}
                value={password}
                onChangeText={handlePassword} />

                <TextInput style={styles.textinput1}
                placeholder={stringTH.passwordConfirm}
                placeholderTextColor={colors.sut_grey7d}
                secureTextEntry={true}
                value={passwordConfirm}
                onChangeText={handlePasswordConfirm}/>

                <Button1 text={stringTH.sentToEmail} onPress={handleRegister}></Button1>
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
      },
      invalidInput: {
        borderColor: colors.sut_red,
    },
});

export default RegisterScreen