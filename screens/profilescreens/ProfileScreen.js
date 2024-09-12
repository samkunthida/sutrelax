import { View, StyleSheet, Text, Image } from 'react-native'
import React from 'react'


//import factors
import colors from '../../factors/colors'
import stringTH from '../../factors/strings'
import images from '../../factors/images'

//import components
import Button1 from '../../components/Button1'

//import dependencies
import AsyncStorage from '@react-native-async-storage/async-storage'

const ProfileScreen = ({ navigation }) => {

  const firstName = "สมชาย";
  const lastName = "ใจดี";
  const dateCreatedAccount = "1 มกราคม 2564";
  const profileImage = images.PROFILEIMAGE;

  function handleSignOut() {
    AsyncStorage.setItem('isLoggedIn', '');
    AsyncStorage.setItem('token', '');
    navigation.navigate('Splash');
  }

  return (
    <View>
      <Image source={images.PROFILEBG} style={styles.backgroundImage1} />

      <View style={styles.profileImageContainer}>
        <Image source={profileImage} style={styles.profileImage} />
      </View>

      <Text>{firstName + " " + lastName}</Text>
      <Text>{"เข้าร่วมเมื่อ " + dateCreatedAccount}</Text>

      <View style={styles.buttonContainer}>
      <Button1 style={styles.button} text="ออกจากระบบ" onPress={handleSignOut} ></Button1>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{

    },
    button: {
      backgroundColor: colors.sut_red
    },
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50
    },
    profileImageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 125
    },
    profileImage: {
      width: 116,
      height: 116,
      borderRadius: 100,
      borderWidth: 3,
      borderColor: colors.sut_white
    },
    backgroundImage1: {
      resizeMode: "contain",
    width: 420,
    height: 925,
    position: 'absolute',
    top: -355,
    }
});

export default ProfileScreen