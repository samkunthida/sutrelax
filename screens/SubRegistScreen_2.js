import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { useState, React, useEffect } from 'react';
import { Alert } from 'react-native';

//import factors
import colors from '../factors/colors';
import stringTH from '../factors/strings';
import images from '../factors/images';

//import components
import Button1 from '../components/Button1';

//import dependencies
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SubRegisterScreen_2 = ({ navigation, route }) => {
  // Functions
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastname] = useState('');
  const [token, setToken] = useState('');
  const user = route?.params?.user || {};
  const [userData, setUserData] = useState(user);
  
  const getData = async () => {
    try {
        const token = await AsyncStorage.getItem('token');
        setToken(token);
        console.log("token",token);
    } catch (error) {
        console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleFirstName = (text) => {
    setFirstName(text);
  };

  const handleLastName = (text) => {
    setLastname(text);
  };

  const updateUserDetails = async () => {
    try {
      const response = await axios.post('http://192.168.1.42:8000/updateUserName', {
        firstName,
        lastName,
        token
      });
      console.log(response.data);
      if (response.data.status === "Ok") {
        setUserData({
          ...userData,
          firstName,
          lastName
        });
        //alert("Update successful!");
        navigation.navigate('SubRegist_3', { user: userData });
      } else {
        alert("Update failed: " + response.data.data);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An error occurred: ' + error.message);
    }
  };

  const handleNext = async () => {
    await updateUserDetails();
    navigation.navigate('SubRegist_3', { user: { ...userData, firstName, lastName, gender } });
  };

  return (
    <ScrollView contentContainerStyle={{ flexGlow: 1 }} keyboardShouldPersistTaps={"always"}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>

          <View style={styles.topContainer}>
            <Image source={images.TOPSUBREG} style={styles.backgroundImage1} />
          </View>

          <View style={styles.secondContentContainer}>
            <Text style={styles.topic}>{stringTH.subreg_question1}</Text>

            <View style={styles.textInputContainer}>

              <TextInput style={styles.textinput1}
                placeholder={stringTH.firstName}
                placeholderTextColor={colors.sut_grey7d}
                onChangeText={handleFirstName}
              />
              <TextInput style={styles.textinput1}
                placeholder={stringTH.lastName2}
                placeholderTextColor={colors.sut_grey7d}
                onChangeText={handleLastName}
              />

            </View>

            <View style={styles.buttonContainer}>
              <Button1 text={stringTH.ok2} onPress={handleNext}></Button1>
            </View>

          </View>
        </View>
      </View>
    </ScrollView>
  );
};

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
    fontSize: 24,
    color: colors.sut_darkblue,
    textAlign: 'center'
  },
  topicContainer: {

  },
  buttonContainer: {
    marginTop: 150,
    alignItems: 'center',
    marginBottom: 65
  },
  textinput1: {
    borderColor: colors.sut_grey7d,
    borderWidth: 1,
    height: 45,
    width: 370,
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 15,
    color: colors.sut_darkblue,
    fontFamily: 'Kanit-Regular',
    fontSize: 16
  },
  textInputContainer: {
    marginTop: 30,
    alignItems: 'center'
  },
  backgroundImage1: {
    resizeMode: "contain",
    width: 420,
    height: 925,
    position: 'absolute',
    top: -300,
    left: -210,
  },
  secondContentContainer: {
    height: '100%',
    justifyContent: 'flex-end',
  },
});

export default SubRegisterScreen_2;