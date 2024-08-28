import { View, StyleSheet, Text } from 'react-native'
import React from 'react'

//import factors
import colors from '../factors/colors'
import stringTH from '../factors/strings'

//import components
import Button1 from '../components/Button1'

const ProfileScreen = ({ navigation }) => {

  const doLogout = () =>{
    navigation.replace('LoginScreen');
  }

  return (
    <View>
      <Text>Profile Screen</Text>
      <Button1 style={styles.button1} text="ออกจากระบบ" ></Button1>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{

    },
    button1: {
      backgroundColor: colors.sut_red
    }
});

export default ProfileScreen