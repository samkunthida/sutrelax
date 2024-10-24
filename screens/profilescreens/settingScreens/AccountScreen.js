import React, { useEffect, useState } from 'react';
import { View, StyleSheet, RefreshControl, ScrollView } from 'react-native';

// Import factors
import colors from '../../../factors/colors';

// Import components
import MenuCard7 from '../../../components/MenuCard7';
import Button1 from '../../../components/Button1';

// Import dependencies
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const AccountScreen = ({ navigation }) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [gender, setGender] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [refreshing, setRefreshing] = useState(false); 

    async function getData() {
        const token = await AsyncStorage.getItem('token')
        console.log(token)
        axios
          .post("http://192.168.1.42:8000/userData", { token: token })
          .then(res => {
            
            setFirstName(res.data.data.firstName);
            setLastName(res.data.data.lastName);
            setGender(res.data.data.gender);
            setBirthDate(res.data.data.dateOfBirth);
            console.log(res.data);
    
        })
      }
    
      useEffect(() => {
        getData()
      },[]);

      const onRefresh = async () => {
        setRefreshing(true);
        await getData();      
        setRefreshing(false); 
      };

    const handleEditAccount = () => {
        navigation.navigate('EditAccountScreen');
    }

    const handleAccount = () => {
        navigation.navigate('AccountScreen');
    }

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        const options = {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        };
        return date.toLocaleDateString('th-TH', options);
    };

    const formatGender = (gender) => {
        switch (gender) {
            case 'female':
                return 'เพศหญิง';
            case 'male':
                return 'เพศชาย';
            case 'unknown':
            default:
                return 'ไม่ระบุ';
        }
    };
    
    return (
        <View style={styles.container}>
            <ScrollView
          style={styles.container}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        > 
                <MenuCard7 topic={'ชื่อ'} content={firstName}/>
                <MenuCard7 topic={'นามสกุล'} content={lastName}/>
                <MenuCard7 topic={'เพศ'} content={formatGender(gender)}/>
                <MenuCard7 topic={'วันเกิด'} content={formatDate(birthDate)}/>
                <View style={styles.buttonContainer}>
                <Button1 text={"แก้ไขข้อมูล"} onPress={handleEditAccount}></Button1>
                </View>
                <View style={styles.buttonContainer}>
                <Button1 text={"เปลี่ยนรูปโปรไฟล์"} onPress={handleAccount}></Button1>
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
    }

});

export default AccountScreen;
