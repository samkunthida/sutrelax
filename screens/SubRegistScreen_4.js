import { View, Text, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

//import factors
import colors from '../factors/colors'
import stringTH from '../factors/strings'
import images from '../factors/images';

//import components
import Button1 from '../components/Button1';

//import dependencies
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SubRegisterScreen_4 = ({ navigation, route }) => {

    const [token, setToken] = useState('');
    const user = route?.params?.user || {};
    const [userData, setUserData] = useState(user);
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [show, setShow] = useState(false);

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

    const updateUserDetails = async (newDate) => {
      try {
        const response = await axios.post('http://192.168.1.42:8000/updateUserDateOfBirth', {
          dateOfBirth: newDate,
          token
        });
        console.log(response.data);
        if (response.data.status === "Ok") {
          setUserData(prevUserData => ({
            ...prevUserData,
            dateOfBirth: newDate
          }));
          //alert("Update successful!");
          navigation.navigate('SubRegist_4', { user: { ...userData, dateOfBirth: newDate } });
        } else {
          alert("Update failed: " + response.data.data);
        }
      } catch (error) {
        console.error(error);
        Alert.alert('Error', 'An error occurred: ' + error.message);
      }
    };

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || dateOfBirth;
      setShow(false);
      setDateOfBirth(currentDate);
    }

    const showDatepicker = () => {
      setShow(true);
    }
    const formatDate = (dateOfBirth) => {
      let day = dateOfBirth.getDate().toString().padStart(2, '0');
      let month = (dateOfBirth.getMonth() + 1).toString().padStart(2, '0');
      let year = (dateOfBirth.getFullYear() + 543).toString(); 
  
      return `${day}/${month}/${year}`;
    };

    const nextButton = async () => {
        await updateUserDetails(dateOfBirth);
        navigation.navigate('MenuStack')
    }

    // Screen
    return (
        <View style={styles.container}>
        <View style={styles.contentContainer}>

        <View>
        <Image source={images.TOPSUBREG} style={styles.backgroundImage1} />
        </View>

        <Text style={styles.topic}>วันเดือนปีเกิดของคุณ?</Text>
        <TouchableOpacity onPress={showDatepicker}>
          <TextInput
          style={styles.textinput1}
          value={dateOfBirth ? formatDate(dateOfBirth) : 'dd/mm/yyyy'}
          editable={false} 
          pointerEvents="none"
          />
        </TouchableOpacity>

        {show && (
        <DateTimePicker
          value={dateOfBirth || new Date()}
          mode="date"
          display="default"
          onChange={onChange}
        />
        )}



            <View style={styles.buttonContainer}>
            <Button1 text='โอเค!' onPress={nextButton}></Button1>
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
        fontFamily: 'Kanit-Regular',
        fontSize: 24,
        color: colors.sut_darkblue,
        textAlign: 'center',
        marginBottom:30,
        marginTop: 380
      },
      textinput1: {
        borderColor: colors.sut_grey7d,
        borderWidth: 1,
        height: 45,
        width: 175,
        borderRadius: 10,
        marginBottom: 15,
        color: colors.sut_grey7d,
        textAlign: 'center',
        fontFamily: 'Kanit-Medium',
        fontSize: 16
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
      buttonContainer: {
        marginTop: 250,
        alignItems: 'center',
        marginBottom: 65
      },
});

export default SubRegisterScreen_4