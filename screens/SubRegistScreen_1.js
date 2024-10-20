import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { useState, useEffect, React } from 'react';
//import factors
import colors from '../factors/colors'
import stringTH from '../factors/strings'
import images from '../factors/images';
import { Alert } from 'react-native';

//import components
import Button1 from '../components/Button1';

//import dependencies
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SubRegisterScreen_1 = ({ navigation, route }) => {
  console.log("Route Params: ", route.params); // Log route params
  const user = route?.params?.user || {};
  const initialEmail = route?.params?.email || '';
  const initialPassword = route?.params?.password || '';

  const [userData, setUserData] = useState(user);
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState(initialPassword);
  
  const getData = async () => {
    try {
        //const token = await AsyncStorage.getItem('token');
        //console.log("token: ", token);
        // const res = await axios.post("http://192.168.1.42:8000/updateUserDetails", userData);
        // console.log("res.user: ", res.user);
        // console.log("res.data.user: ", res.data.user);
        // console.log("user: ", user);
        setUserData(user); // Assuming the response contains user data
        console.log("user", user);
      } catch (error) {
        console.error(error);
      }
};

  const getDataTest = async () => {
    console.log(email, password);
    const userData = {
      email: email,
      password
    }
    axios
      .post("http://192.168.1.42:8000/loginUser", userData)
      .then(res => {
        console.log(res.data);
        if (res.data.status == "ok") {
          AsyncStorage.setItem('token', res.data.data);
          AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
          //navigation.navigate('SubRegist_2');
        }
      });
    }

  useEffect(() => {
    getDataTest()
  },[]);

  // Functions
  const handleNext = async () => {
    navigation.navigate('SubRegist_2', { user: userData });
    console.log("userData: " + JSON.stringify(userData));
  }

  // Screen
  return (

    <View style={styles.container}>
      <View style={styles.contentContainer}>
      <View style={styles.topContainer}>
        <Image source={images.TOPSUBREG} style={styles.backgroundImage1} />
      </View>
      <View style={styles.secondContentContainer}>
        <Text style={styles.topic}>{stringTH.subreg_message1}</Text>
        <View style={styles.buttonContainer}>
          <Button1 text={stringTH.ok2} onPress={handleNext}></Button1>
        </View>
        </View>
      </View>
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
    marginTop: 380,
    fontFamily: 'Kanit-Regular',
    fontSize: 20,
    color: colors.sut_darkblue,
    textAlign: 'center'
  },
  secondContentContainer: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    marginTop: 250,
    alignItems: 'center',
    marginBottom: 65
  },
  backgroundImage1: {
    resizeMode: "contain",
    width: 420,
    height: 925,
    position: 'absolute',
    top: -300,
    left: -210,
  },
});

export default SubRegisterScreen_1