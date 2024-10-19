import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import { useState, useEffect } from 'react';

// import factors
import colors from '../factors/colors';
import images from '../factors/images';

// import components
import Button1 from '../components/Button1';

// import dependencies
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SubRegisterScreen_3 = ({ navigation, route }) => {
  const initialGender = route?.params?.gender || '';
  const [token, setToken] = useState('');
  const user = route?.params?.user || {};
  const [userData, setUserData] = useState(user);

  useEffect(() => {
    const getData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        setToken(token);
        console.log("token", token);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  const updateUserDetails = async (newGender) => {
    try {
      const response = await axios.post('http://192.168.1.42:8000/updateUserGender', {
        gender: newGender,
        token
      });
      console.log(response.data);
      if (response.data.status === "Ok") {
        setUserData(prevUserData => ({
          ...prevUserData,
          gender: newGender
        }));
        //alert("Update successful!");
        navigation.navigate('SubRegist_4', { user: { ...userData, gender: newGender } });
      } else {
        alert("Update failed: " + response.data.data);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An error occurred: ' + error.message);
    }
  };

  // Button handlers
  const handleGenderSelect = (selectedGender) => {
    updateUserDetails(selectedGender);
  };

  // Screen
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.topContainer}>
          <Image source={images.TOPSUBREG} style={styles.backgroundImage1} />
        </View>

        <View style={styles.secondContentContainer}>
          <Text style={styles.topic}>เพศสภาพของคุณ?</Text>
          <View style={styles.buttomContainer}>
            <Button1 text="เพศชาย" onPress={() => handleGenderSelect('male')} style={styles.greyButton} />
            <Button1 text="เพศหญิง" onPress={() => handleGenderSelect('female')} style={styles.greyButton} />
            <Button1 text="ไม่ระบุ" onPress={() => handleGenderSelect('unknown')} style={styles.lightGreyButton} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.sut_white,
    alignItems: 'center',
    alignContent: 'center',
  },
  contentContainer: {
    width: '100%',
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topic: {
    fontFamily: 'Kanit-Regular',
    fontSize: 24,
    color: colors.sut_darkblue,
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 155,
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
    justifyContent: 'center',
  },
  greyButton: {
    backgroundColor: colors.sut_grey7d,
    marginBottom: 10,
    borderRadius: 10,
  },
  lightGreyButton: {
    backgroundColor: colors.sut_lightgrey,
    borderRadius: 10,
  },
});

export default SubRegisterScreen_3;
