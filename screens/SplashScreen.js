import { View, Text, StyleSheet, Image, Dimensions} from 'react-native'
import React from 'react'
import { useState } from 'react'
import colors from '../colors'

//components
import Button2 from '../components/Button2'
import Button3 from '../components/Button3'

//images
import SplashBG from '../assets/images/SplashBG1.png'
import SplashLogo from '../assets/images/SplashLogo.png'



const SplashScreen = ({ navigation }) => {

  // Functions
const LoginButton = () => {
  navigation.navigate('LoginScreen');
}
const RegisterButton = () => {
  navigation.navigate('RegisterScreen');
}

  // Screen
  return (
    <View style={styles.container}>

      <View style={styles.topContainer}>
      <Image source={SplashBG} style={styles.backgroundImage1} />
      <Image source={SplashLogo} style={styles.logoImage2} />
      </View>

      <View style={styles.buttonContainer}>
      <Button2 text='สร้างบัญชีผู้ใช้' onPress={RegisterButton}></Button2>
      <Button3 text='เข้าสู่ระบบ' onPress={LoginButton}></Button3>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex:1,
    backgroundColor: colors.sut_darkblue,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flexGrow: 1,            
    justifyContent: 'space-between'
  },
  text: {
    color: colors.sut_white,
    fontSize: 18,
    fontFamily: 'Kanit-Regular'
  },
  topContainer: {
    
  },
  buttonContainer: {
    marginBottom: 60,
    alignItems: 'center'
  },
  backgroundImage1: {
    resizeMode: "contain",
    width: 420,
    height: 925,
    position: 'absolute',
    top: -230,
    left: -210,
  },
  logoImage1: {
    resizeMode: "contain",
    width: 390, // Adjust width as needed
    height: 390, // Adjust height as needed
    position: 'absolute',
    top: -30, // Adjust top as needed
    left: (0 - 390) / 2, // Center horizontally
  },
  logoImage2: {
    resizeMode: "contain",
    width: 390, // Adjust width as needed
    height: 149, // Adjust height as needed
    position: 'absolute',
    top: 320, // Adjust top as needed
    left: (0 - 390) / 2, // Center horizontally
  },
  logotext: {
    fontFamily: 'Kanit-Regular',
    fontSize: 24
  }


});

export default SplashScreen