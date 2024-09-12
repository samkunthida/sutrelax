import { View, TextInput, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import colors from '../factors/colors';
import stringTH from '../factors/strings';
import Button1 from '../components/Button1';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [emailVerify, setEmailVerify] = useState(false);
    const [passwordVerify, setPasswordVerify] = useState(false);
    const [passwordConfirmVerify, setPasswordConfirmVerify] = useState(false);
    const [user, setUser] = useState('');

    const isButtonDisabled = !(emailVerify && passwordVerify && passwordConfirmVerify);

    const handleEmail = (text) => {
        setEmail(text);
        setEmailVerify(/^[\w.%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/.test(text));
    };

    const handlePassword = (text) => {
        setPassword(text);
        setPasswordVerify(text.length >= 8);
        setPasswordConfirmVerify(text === passwordConfirm);
    };

    const handlePasswordConfirm = (text) => {
        setPasswordConfirm(text);
        setPasswordConfirmVerify(text === password);
    };

    const handleRegister = async () => {
        const userData = {
            firstName: "",
            lastName: "",
            profileImage: "",
            dateOfBirth: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'numeric', year: 'numeric' }),
            gender: "unknown",
            dateCreatedAccount: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'numeric', year: 'numeric' }),
            email,
            password
        };

        if (emailVerify && passwordVerify && passwordConfirmVerify) {
            try {
                const res = await axios.post("http://192.168.1.42:8000/registerUser", userData);
                if (res.data.status === "ok") {
                    Alert.alert(stringTH.createdAccount);
                    const token = res.data.token;
                    setUser(userData);
                    await AsyncStorage.setItem('userData', JSON.stringify(userData));
                    await AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
                    navigation.navigate('SubRegist_1', { user: userData }, { token: token });
                    console.log("userData: " + JSON.stringify(userData));
                } else {
                    Alert.alert(JSON.stringify(res.data));
                }
            } catch (e) {
                console.log(e + " error unknown caused");
            }
        } else {
            Alert.alert(stringTH.fillEmailPassword);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <TextInput
                    style={[styles.textinput1, !emailVerify && styles.invalidInput]}
                    placeholder={stringTH.email}
                    placeholderTextColor={colors.sut_grey7d}
                    keyboardType='email-address'
                    value={email}
                    onChangeText={handleEmail}
                />
                <TextInput
                    style={[styles.textinput1, !passwordVerify && styles.invalidInput]}
                    placeholder={stringTH.password}
                    placeholderTextColor={colors.sut_grey7d}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={handlePassword}
                />
                <TextInput
                    style={[styles.textinput1, !passwordConfirmVerify && styles.invalidInput]}
                    placeholder={stringTH.passwordConfirm}
                    placeholderTextColor={colors.sut_grey7d}
                    secureTextEntry={true}
                    value={passwordConfirm}
                    onChangeText={handlePasswordConfirm}
                />
                <Button1
                    text={stringTH.sentToEmail}
                    onPress={handleRegister}
                    disabled={isButtonDisabled}
                />
            </View>
        </View>
    );
};

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

export default RegisterScreen;