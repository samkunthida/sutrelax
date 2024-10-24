import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, ScrollView, TextInput } from 'react-native';

// Import factors
import colors from '../../../factors/colors';
import stringTH from '../../../factors/strings';

// Import components
import Button1 from '../../../components/Button1';

// Import dependencies
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const EditAccountScreen = ({ navigation }) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [firstNameData, setFirstNameData] = useState('')
    const [lastNameData, setLastNameData] = useState('')
    const [token, setToken] = useState('')

    async function getData() {
        const token = await AsyncStorage.getItem('token')
        console.log(token)
        setToken(token);
        axios
          .post("http://192.168.1.42:8000/userData", { token: token })
          .then(res => {
            console.log(res.data);
            setFirstNameData(res.data.data.firstName);
            setLastNameData(res.data.data.lastName);
        })
      }

      const updateUserDetails = async () => {
        try {
          const response = await axios.post('http://192.168.1.42:8000/updateUserName', {
            firstName,
            lastName,
            token
          });
          console.log(response.data);
          if (response.data.status === "Ok") {
            alert("เปลี่ยนชื่อสำเร็จ");
          } else {
            alert("Update failed: " + response.data.data);
          }
        } catch (error) {
          console.error(error);
          Alert.alert('Error', 'An error occurred: ' + error.message);
        }
      };
    
      useEffect(() => {
        getData()
      },[]);

    const handleSubmit = () => {
        if (!firstName || !lastName) {
            Alert.alert("Error", "Please fill in all fields.");
            return;
        }
        updateUserDetails();
    }
    
    return (
        <View style={styles.container}>
            <ScrollView>

        <View style={styles.contentContainer}>
            <TextInput style={styles.textinput1}
          placeholder={firstNameData}
          placeholderTextColor={colors.sut_grey7d}
          color={colors.sut_darkblue}
          value={firstName}
          onChangeText={setFirstName} />
            <TextInput style={styles.textinput1}
          placeholder={lastNameData}
          placeholderTextColor={colors.sut_grey7d}
          color={colors.sut_darkblue}
          value={lastName}
          onChangeText={setLastName} />
        </View>
        <View style={styles.buttonContainer}>
        <Button1 text={"บันทึก"} onPress={handleSubmit}></Button1>
        </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.sut_white,
    },
    buttonContainer: {
        alignSelf: 'center',
        marginTop: 15,
    },
    textinput1: {
        borderColor: colors.sut_grey7d,
        borderWidth: 1,
        height: 45,
        width: 370,
        borderRadius: 10,
        paddingLeft: 15,
        marginBottom: 15,
        color: colors.sut_white,
        fontFamily: 'Kanit-Regular',
        fontSize: 16
      },
      contentContainer: {
        width: '100%',
        paddingTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
      },

});

export default EditAccountScreen;
