import { View, StyleSheet, Text } from 'react-native'
import React from 'react'

//import factors
import colors from '../factors/colors'
import stringTH from '../factors/strings'

//import components
import Button1 from '../components/Button1'

//import dependencies
import AsyncStorage from '@react-native-async-storage/async-storage'

const ProfileScreen = ({ navigation }) => {

  function handleSignOut() {
    AsyncStorage.setItem('isLoggedIn', '');
    AsyncStorage.setItem('token', '');
    navigation.navigate('LoginScreens');
  }

  return (
    <View>
      <Text>Profile Screen</Text>
      <Button1 style={styles.button} text="ออกจากระบบ" onPress={handleSignOut} ></Button1>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{

    },
    button: {
      backgroundColor: colors.sut_red
    }
});

export default ProfileScreen