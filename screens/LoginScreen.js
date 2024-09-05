import { View, StyleSheet, TextInput } from 'react-native'
import { useState, React } from 'react';
import { Alert } from 'react-native';

// import factors
import colors from '../factors/colors'
import stringTH from '../factors/strings'

import Button1 from '../components/Button1';
import TextButton from '../components/TextButton';

// import dependencies
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    console.log(email, password);
    const userData = {
      email: email,
      password
    }
    axios
      .post("http://192.168.1.42:8000/loginUser", userData)
      .then(res => {
        console.log(res.data)
        if (res.data.status == "ok") {
          Alert.alert("เข้าสู่ระบบสำเร็จ");
          AsyncStorage.setItem('token', res.data.data)
          navigation.navigate('HomeStack')
        }
      });
  }

  const handleForget = () => {
    navigation.navigate('ForgetPasswordScreen')
  }

  // Screen
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>

        <TextInput style={styles.textinput1}
          placeholder={stringTH.email}
          placeholderTextColor={colors.sut_grey7d}
          keyboardType='email-address'
          onChangeText={setEmail} />

        <TextInput style={styles.textinput1}
          placeholder={stringTH.password}
          placeholderTextColor={colors.sut_grey7d}
          secureTextEntry={true}
          onChangeText={setPassword} />

        <View style={styles.textButtonContainer}>
          <TextButton text={stringTH.forgetPassword} onPress={handleForget}></TextButton>
        </View>

        <Button1 text={stringTH.login} onPress={handleLogin}></Button1>
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
  textButtonContainer: {
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