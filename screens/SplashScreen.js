import { View, Text, StyleSheet, Image, Dimensions} from 'react-native'
import { useState, React } from 'react'

//import factors
import colors from '../factors/colors'
import stringTH from '../factors/strings'
import images from '../factors/images'

//import components
import Button1 from '../components/Button1'

const SplashScreen = ({ navigation }) => {

  // Functions
const LoginButton = () => {
  navigation.navigate('Login');
}
const RegisterButton = () => {
  navigation.navigate('Register');
}

  // Screen
  return (
    <View style={styles.container}>

      <View style={styles.topContainer}>
      <Image source={images.SPLASHBG} style={styles.backgroundImage1} />
      <Image source={images.SPLASHLOGO} style={styles.logoImage2} />
      </View>

      <View style={styles.buttonContainer}>
      <Button1 text='สร้างบัญชีผู้ใช้' onPress={RegisterButton} > </Button1>
      <Button1 text='เข้าสู่ระบบ' onPress={LoginButton} style = {styles.button}></Button1>
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
    width: 390,
    height: 390,
    position: 'absolute',
    top: -30,
    left: (0 - 390) / 2,
  },
  logoImage2: {
    resizeMode: "contain",
    width: 390,
    height: 149,
    position: 'absolute',
    top: 320,
    left: (0 - 390) / 2,
  },
  logotext: {
    fontFamily: 'Kanit-Regular',
    fontSize: 24
  },
  button: {
    marginTop: 20,
    backgroundColor: colors.sut_darkgrey
  }


});

export default SplashScreen