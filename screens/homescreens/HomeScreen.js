import { View, Text, StyleSheet, Image, Dimensions, TextInput, ScrollView } from 'react-native'
import { useState, useEffect, React } from 'react';

//import factors
import colors from '../../factors/colors'
import stringTH from '../../factors/strings'
import images from '../../factors/images'

//import components
import MenuCard1 from '../../components/MenuCard1';
import MenuCard2 from '../../components/MenuCard2';

//import dependencies
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {

  async function getData() {
    const token = await AsyncStorage.getItem('token')
    console.log(token)
    axios
      .post("http://192.168.1.42:8000/userData", { token: token })
      .then(res => console.log(res.data))
  }

  useEffect(() => {
    getData()
  },[]);

  const shakeMenuHandler = () => {
    navigation.navigate('ShakeScreen');
  }

  const menuAction1 = () => {
    //navigation.navigate(' ')
  }
  const menuAction2 = () => {
    //navigation.navigate(' ')
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.toptext}>
          <Text style={styles.topic}> {stringTH.home_greeting + "{FirstName}"} </Text>
        </View>

        <View style={styles.menuContainer1}>
          <Text style={styles.menuTopic}>{stringTH.menu}</Text>
          <MenuCard1 text={stringTH.assess} onPress={menuAction1}></MenuCard1>
          <MenuCard1 style={styles.menu2} text={stringTH.assessmentHistory} onPress={menuAction1}></MenuCard1>
          <MenuCard1 style={styles.menu3} text={stringTH.askForEncourage} onPress={shakeMenuHandler}></MenuCard1>
        </View>

        <View style={styles.menuContainer3}>
          <Text style={styles.menuTopic}>{stringTH.message}</Text>
        </View>
        <View style={styles.menuContainer2}>
          <MenuCard2 style={styles.menu4} text={stringTH.myQuestion} onPress={menuAction2}></MenuCard2>
          <MenuCard2 style={styles.menu4} text={stringTH.askQuestion} onPress={menuAction2}></MenuCard2>
          <MenuCard2 style={styles.menu4} text={stringTH.notiQuestion} onPress={menuAction2}></MenuCard2>
        </View>

        <View style={styles.bottomContainer}>
          <Image source={images.TRIOBOYS} style={styles.bottomImage} />
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
  menuContainer3: {
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