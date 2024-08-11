import { View, Text, StyleSheet, Image, Dimensions, TextInput, Pressable} from 'react-native'
import React from 'react'
import { useState } from 'react';
import colors from '../colors'

import DateTimePicker from '@react-native-community/datetimepicker';

const SubRegisterScreen_4 = ({ navigation }) => {

    //useState Declaration
    const [dateOfBirth, setDateofBirth] = useState("");

    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);

    // Functions
    const toggleDatePicker = () => {
      setShowPicker(!showPicker);
    };

    const onChange = ({type}, selectedDate) => {
      if (type == "set"){
        const currentDate = selectedDate;
        setDate(currentDate);
      } else {
        toggleDatePicker();
      }
    }

    const nextButton = () => {
        navigation.navigate('HomeStack')
    }

    // Screen
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>

            <Text style={styles.topic}>วันเดือนปีเกิดของคุณ?</Text>

            {showPicker && (
              <DateTimePicker
                mode="date"
                display="spinner"
                value={date}
                onChange={onChange}
                />
            )}

            {!showPicker && (
              <Pressable onPress={toggleDatePicker}>
            <TextInput style={styles.textinput1}
                placeholder='10/10/2002'
                placeholderTextColor={colors.sut_grey7d}
                value={dateOfBirth}
                onChangeText={setDateofBirth}
                editable={false}
                 />
            </Pressable>)}

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
        textAlign: 'center'
      },
      textinput1: {
        borderColor: colors.sut_grey7d,
        borderWidth: 1,
        height: 45,
        width: 175,
        borderRadius: 10,
        paddingLeft: 15,
        marginBottom: 15,
        color: colors.sut_white,
        fontFamily: 'Kanit-Regular',
        fontSize: 16
      },
});

export default SubRegisterScreen_4