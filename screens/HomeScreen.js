import { View, Text, StyleSheet, Image, Dimensions, TextInput, ScrollView} from 'react-native'
import React from 'react'
import { useState } from 'react';
import colors from '../colors'

import MenuCard1 from '../components/MenuCard1';
import MenuCard2 from '../components/MenuCard2';

import { FontAwesome } from '@expo/vector-icons';

import Trioboy from '../assets/images/trioboy.png'

const HomeScreen = ({ navigation }) => {

  const menuAction1 = () => {
    //navigation.navigate('SubRegistScreen_2')
}
const menuAction2 = () => {
  //navigation.navigate('SubRegistScreen_2')
}

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.toptext}>
      <Text style={styles.topic}>สวัสดี! คุณ {"FirstName"} </Text>
      </View>

      <View style={styles.menuContainer1}>
      <Text style={styles.menuTopic}>เมนู</Text>
      <MenuCard1 text='ทำแบบประเมิน' onPress={menuAction1}></MenuCard1>
      <MenuCard1 style={styles.menu2} text='เช็คประวัติการประเมิน' onPress={menuAction1}></MenuCard1>
      <MenuCard1 style={styles.menu3} text='เขย่าขอกำลังใจ' onPress={menuAction1}></MenuCard1>
      </View>

      <View style={styles.menuContainer3}>
      <Text style={styles.menuTopic}>ข้อความ</Text>
      </View>
      <View style={styles.menuContainer2}>
      <MenuCard2 style={styles.menu4} text='คำถามของฉัน' onPress={menuAction2}></MenuCard2>
      <MenuCard2 style={styles.menu4} text='ถามผู้ดูแล' onPress={menuAction2}></MenuCard2>
      <MenuCard2 style={styles.menu4} text='แจ้งเตือนคำตอบ' onPress={menuAction2}></MenuCard2>
      </View>

      <View style={styles.bottomContainer}>
      <Image source={Trioboy} style={styles.bottomImage} />
      </View>
      </View>
    </ScrollView>
  )

}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: colors.sut_white,
      alignContent: 'center',
      
    },
    contentContainer: {
      width: '100%',
      paddingTop: 40,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      marginHorizontal: 20,
    },
    toptext: {
      width: '100%'
    },
    topic: {
      fontFamily: 'Kanit-Medium',
      fontSize: 20,
      color: colors.sut_darkblue,
      textAlign: 'left',
      paddingBottom: 15
    },
    topicContainer: {
      width: '100%',
      alignItems: 'flex-start',
      paddingHorizontal: 20
    },
    buttonContainer: {
      marginTop: 60,
      alignItems: 'center'
    },
    menuContainer1: {
      width: '100%'
    },
    menuContainer2: {
      justifyContent: 'space-between'
    },
    menuContainer3:{
      width: '100%'
    },
    menuTopic: {
      fontFamily: 'Kanit-Regular',
      fontSize: 20,
      color: colors.sut_darkblue,
      textAlign: 'left'
    },
    menu2: {
      backgroundColor: colors.sut_purple
    },
    menu3: {
      backgroundColor: colors.sut_blue
    },
    menuContainer2: {
      width: '100%',
      flexDirection: 'row',
    },
    menu4: {
      backgroundColor: colors.sut_darkblue,
      flex: 1, 
      marginHorizontal: 10,
    },
    bottomImage: {
      width: 410, 
      height: 160, 
      alignSelf: 'center',
      right: 30,
      bottom: 0
    },
    bottomContainer: {
      width: '100%',
      alignItems: 'flex-start', 
      paddingLeft: 20, 
      marginTop: 20,
    }
});

export default HomeScreen