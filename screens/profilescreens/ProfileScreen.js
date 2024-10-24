import { View, StyleSheet, Text, Image, ScrollView, RefreshControl } from 'react-native'
import {React, useState, useEffect} from 'react'


//import factors
import colors from '../../factors/colors'
import stringTH from '../../factors/strings'
import images from '../../factors/images'

//import components
import Button1 from '../../components/Button1'
import Button2 from '../../components/Button2'
import MenuCard1 from '../../components/MenuCard1'
import BarChart1 from '../../components/BarChart1'

//import dependencies
import { BarChart, LineChart } from "react-native-gifted-charts";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const ProfileScreen = ({ navigation }) => {
  
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dateCreatedAccount, setDateCreatedAccount] = useState('')
  const profileImage = images.PROFILEIMAGE;
  const [userID, setUserID] = useState('');
  const [data, setData]= useState('');
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false); 
    async function getData() {
        try {
            const token = await AsyncStorage.getItem('token');
            console.log(token);

            const res = await axios.post("http://192.168.1.42:8000/userData", { token });
            console.log(res.data);

            setFirstName(res.data.data.firstName);
            setLastName(res.data.data.lastName);
            setUserID(res.data.data._id);

            const date = new Date(res.data.data.dateCreatedAccount);
            const year = date.getFullYear() + 543;
            setDateCreatedAccount(year);
        } catch (error) {
            console.error("Error fetching data:", error);
            Alert.alert('Error', 'Failed to load user data.');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const onRefresh = async () => {
      setRefreshing(true);
      await getData();      
      setRefreshing(false); 
    };

    const yAxisLabels = ['•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•'];
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
      navigation.navigate('AssessmentHistoryScreen')
    }
    
    const menuAction2 = () => {
      navigation.navigate('AssessmentScreen')
    }

    const menuAction3 = () => {
      navigation.navigate('SettingScreen')
    }

  const handleSignOut = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('isLoggedIn');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Splash' }],
    });
  }

  return (
    <ScrollView
          style={styles.container}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        > 
    <View>
      <Image source={images.PROFILEBG} style={styles.backgroundImage1} />

      <View style={styles.profileImageContainer}>
        <Image source={profileImage} style={styles.profileImage} />
      </View>

      <View style={styles.textProfile}>
      <Text style={styles.nameText}>{firstName + " " + lastName}</Text>
      <Text style={styles.dateText}>{"เข้าร่วมเมื่อ " + dateCreatedAccount}</Text>
      </View>

      <View style={styles.menuContainer}>
          <Text style={styles.menuTopic}>ติดตามผลการประเมิน</Text>
          <MenuCard1 style={styles.menu1} text={stringTH.assessmentHistory} onPress={menuAction1} icon= "clock-rotate-left" iconColor={colors.sut_white}></MenuCard1>
      </View>

      <View style={styles.menuContainer1}>
          <Text style={styles.menuTopic}>สรุปผลคะแนนการประเมิน</Text>
          <View style={styles.chartSection}>
            <BarChart1 
                topic="แบบวัดความเครียด" 
                data={stressData}                
                yAxisLabels={yAxisLabels}       
            />
            <BarChart1 
                topic="แบบวัดความวิตกกังวล" 
                data={anxietyData}                
                yAxisLabels={yAxisLabels}       
            />
            <BarChart1 
                topic="แบบประเมินภาวะหมดไฟ" 
                data={burnoutData}                
                yAxisLabels={yAxisLabels}       
            />
          </View>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
        <Text style={{fontFamily: 'Kanit-Regular'}}>ทำแบบประเมินเพื่อติดตามอาการต่างๆ เป็นรายเดือน</Text>
        </View>
      <Button1 style={styles.button1} text="เริ่มการทำแบบประเมิน" onPress={menuAction2} ></Button1>
      <Button2 style={styles.button2} text="การตั้งค่า" onPress={menuAction3} icon= "gear" iconColor={colors.sut_darkblue} ></Button2>
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
      marginTop: 30,
      marginBottom: 50
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
      borderColor: colors.sut_darkbrown
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
    menuContainer: {
      width: '100%',
    },
    menuContainer1: {
      width: '100%',
    },
    menuTopic: {
      fontFamily: 'Kanit-Regular',
      fontSize: 20,
      color: colors.sut_darkblue,
      textAlign: 'left',
      marginLeft: 20,
    },
    menu1: {
      backgroundColor: colors.sut_darkblue,
      alignSelf: 'center',
    },
    chartTopic: {
      fontFamily: 'Kanit-Medium',
      color: colors.sut_darkblue,
      marginTop: 10,
      marginLeft: 20,
    },
    chartSection: {
      marginLeft: 10,
    },
    barChartDefault: {
      color: colors.sut_grey7d,
      fontFamily: 'Kanit-Regular',
    },
    textContainer: {
      marginBottom: 15,
    }
});

export default ProfileScreen