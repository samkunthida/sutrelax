import { View, Text, StyleSheet, Image, Dimensions, TextInput} from 'react-native'
import React from 'react'
import { useState } from 'react';
import colors from '../colors'

import OrangeButton from '../components/orangeButton'
import OrangeButtonDefault from '../components/orangeButtonDefault';

import FontAwesome from 'react-native-vector-icons/AntDesign';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.topic}>Home Screen Test</Text>
      <FontAwesome name="home" size={30} color="#900" />
    </View>
  )

}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: colors.sut_white,
      alignItems: 'center',
      alignContent: 'center'
    },
    contentContainer: {
      width: '100%',
      paddingTop: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    topic: {
      fontFamily: 'Kanit-Regular',
      fontSize: 20,
      color: colors.sut_darkblue,
      textAlign: 'left'
    },
    topicContainer: {
      
    },
    buttonContainer: {
      marginTop: 60,
      alignItems: 'center'
    }
});

export default HomeScreen