import { View, StyleSheet, Text, Image, ScrollView } from 'react-native'
import {React, useState, useEffect} from 'react'


//import factors
import colors from '../../factors/colors'
import stringTH from '../../factors/strings'
import images from '../../factors/images'

//import components
import Button1 from '../../components/Button1'
import Button2 from '../../components/Button2'
import MenuCard1 from '../../components/MenuCard1'

//import dependencies
import { BarChart, LineChart } from "react-native-gifted-charts";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const ProfileScreen = ({ navigation }) => {
  
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dateCreatedAccount, setDateCreatedAccount] = useState('')
  const profileImage = images.PROFILEIMAGE;
  
  async function getData() {
    const token = await AsyncStorage.getItem('token')
    console.log(token)
    axios
      .post("http://192.168.1.42:8000/userData", { token: token })
      .then(res => {
        console.log(res.data);
        setFirstName(res.data.data.firstName);
        setLastName(res.data.data.lastName);

        const date = new Date(res.data.data.dateCreatedAccount);
        const year = date.getFullYear() + 543;
        setDateCreatedAccount(year);
    })
  }

  useEffect(() => {
    getData()
  },[]);

    const yAxisLabels = ['•', '•', '•', '•', '•', '•', '•', '•', '•', 'สูง', '•'];
    //hardcode data
    const stressData = [
      { value: 10, label: "Jan" },
      { value: 0, label: "Feb" },
      { value: 0, label: "Mar" },
      { value: 0, label: "Apr" },
      { value: 0, label: "May" },
      { value: 0, label: "Jun" },
      { value: 0, label: "Jul" },
      { value: 0, label: "Aug" },
      { value: 0, label: "Sep" },
      { value: 0, label: "Oct" },
      { value: 0, label: "Nov" },
      { value: 0, label: "Dec" },
    ];
    
    const anxietyData = [
      { value: 0, label: "Jan" },
      { value: 10, label: "Feb" },
      { value: 0, label: "Mar" },
      { value: 0, label: "Apr" },
      { value: 0, label: "May" },
      { value: 0, label: "Jun" },
      { value: 0, label: "Jul" },
      { value: 0, label: "Aug" },
      { value: 0, label: "Sep" },
      { value: 0, label: "Oct" },
      { value: 0, label: "Nov" },
      { value: 0, label: "Dec" },
    ];
    
    const burnoutData = [
      { value: 0, label: "Jan" },
      { value: 0, label: "Feb" },
      { value: 10, label: "Mar" },
      { value: 0, label: "Apr" },
      { value: 0, label: "May" },
      { value: 0, label: "Jun" },
      { value: 0, label: "Jul" },
      { value: 0, label: "Aug" },
      { value: 0, label: "Sep" },
      { value: 0, label: "Oct" },
      { value: 0, label: "Nov" },
      { value: 0, label: "Dec" },
    ];

  const menuAction1 = () => {
  }

  function handleSignOut() {
    AsyncStorage.setItem('isLoggedIn', '');
    AsyncStorage.setItem('token', '');
    navigation.navigate('Splash');
  }

  return (
    <ScrollView style={styles.container}> 
    <View>
      <Image source={images.PROFILEBG} style={styles.backgroundImage1} />

      <View style={styles.profileImageContainer}>
        <Image source={profileImage} style={styles.profileImage} />
      </View>

      <View style={styles.textProfile}>
      <Text style={styles.nameText}>{firstName + " " + lastName}</Text>
      <Text style={styles.dateText}>{"เข้าร่วมเมื่อ " + dateCreatedAccount}</Text>
      </View>

      <View style={styles.menuContainer1}>
          <Text style={styles.menuTopic}>ติดตามผลการประเมิน</Text>
          <MenuCard1 style={styles.menu1} text={stringTH.assessmentHistory} onPress={menuAction1} icon= "clock-rotate-left" iconColor={colors.sut_white}></MenuCard1>
      </View>

      <View style={styles.menuContainer1}>
          <Text style={styles.menuTopic}>สรุปผลคะแนนการประเมิน</Text>
          <View style={styles.chartSection}>
            <Text style={styles.chartTopic}>ความเครียด</Text>
            <BarChart data = {stressData}
            xAxisLabelTextStyle={{color: colors.sut_grey7d, fontFamily: 'Kanit-Regular'}}
            yAxisLabelTextStyle={{color: colors.sut_grey7d, fontFamily: 'Kanit-Regular'}}
            yAxisLabelTexts={yAxisLabels}
            barBorderTopLeftRadius={5}
            barBorderTopRightRadius={5}
            frontColor={colors.sut_grey7d}
            xAxisThickness={0}
            yAxisThickness={0}
            rulesType="solid"
            />
            <Text style={styles.chartTopic}>ความวิตกกังวล</Text>
            <BarChart data = {anxietyData}
            xAxisLabelTextStyle={{color: colors.sut_grey7d, fontFamily: 'Kanit-Regular'}}
            yAxisLabelTextStyle={{color: colors.sut_grey7d, fontFamily: 'Kanit-Regular'}}
            yAxisLabelTexts={yAxisLabels}
            barBorderTopLeftRadius={5}
            barBorderTopRightRadius={5}
            frontColor={colors.sut_grey7d}
            xAxisThickness={0}
            yAxisThickness={0}
            rulesType="solid"
            />
            <Text style={styles.chartTopic}>ภาวะหมดไฟ</Text>
            <BarChart data = {burnoutData}
            xAxisLabelTextStyle={{color: colors.sut_grey7d, fontFamily: 'Kanit-Regular'}}
            yAxisLabelTextStyle={{color: colors.sut_grey7d, fontFamily: 'Kanit-Regular'}}
            yAxisLabelTexts={yAxisLabels}
            barBorderTopLeftRadius={5}
            barBorderTopRightRadius={5}
            frontColor={colors.sut_grey7d}
            xAxisThickness={0}
            yAxisThickness={0}
            rulesType="solid"
            />
          </View>
      </View>

      <View style={styles.buttonContainer}>
        <Text style={{fontFamily: 'Kanit-Regular'}}>ทำแบบประเมินเพื่อติดตามอาการต่างๆ เป็นรายเดือน</Text>
      <Button1 style={styles.button1} text="เริ่มการทำแบบประเมิน" onPress={""} ></Button1>
      <Button2 style={styles.button2} text="การตั้งค่า" onPress={""} icon= "gear" iconColor={colors.sut_darkblue} ></Button2>
      <Button1 style={styles.button3} text="ออกจากระบบ" onPress={handleSignOut} ></Button1>
      </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{

    },
    button1: {
      backgroundColor: colors.sut_primary,
      marginBottom: 15
    },
    button2: {
      marginBottom: 15
    },
    button3: {
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
    },
    textProfile: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10
    },
    nameText: {
      fontSize: 24,
      fontFamily: 'Kanit-Medium',
      color: colors.sut_darkblue
    },
    dateText: {
      fontSize: 14,
      fontFamily: 'Kanit-Regular',
      color: colors.sut_grey7d
    },
    menuContainer1: {
      width: '100%',
    },
    menuTopic: {
      fontFamily: 'Kanit-Regular',
      fontSize: 20,
      color: colors.sut_darkblue,
      textAlign: 'left',
    },
    menu1: {
      backgroundColor: colors.sut_darkblue,
    },
    chartTopic: {
      fontFamily: 'Kanit-Regular',
      color: colors.sut_darkblue,
      marginTop: 10
    },
    chartSection: {
      marginLeft: 10,
    },
    barChartDefault: {
      color: colors.sut_grey7d,
      fontFamily: 'Kanit-Regular',
    }
});

export default ProfileScreen