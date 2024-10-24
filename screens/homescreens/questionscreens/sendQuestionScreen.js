import { View, Text, StyleSheet, Image, Dimensions, TextInput} from 'react-native'
import React from 'react'
import { useState } from 'react';

//import factors
import colors from '../../../factors/colors'
import stringTH from '../../../factors/strings'

import Button1 from '../../../components/Button1';

//import dependencies
import axios from 'axios';

const SendQuestionScreen = ({ navigation }) => {

    const [topic, setTopic] = useState('');
    const [content, setContent] = useState('');
    // Functions
    const a = () => {
        //navigation.navigate('a')
    }
    
    const handleSend = () => {
        console.log(topic, content);
        const questionData = {
          topic: topic,
          content: content
        }
        axios
          //.post("http://
    }
        

    // Screen
    return (
        <View style={styles.container}>
        <TextInput style={styles.textinput1}
          placeholder={"หัวข้อ"}
          placeholderTextColor={colors.sut_grey7d}
          value={topic}
          onChangeText={setTopic} />

          <TextInput style={styles.textinput2}
          placeholder={"ข้อความที่อยากถาม"}
          placeholderTextColor={colors.sut_grey7d}
          value={content}
          onChangeText={setContent} />
        <Button1 text={"ตั้งคำถาม"} onPress={"handleLogin"}></Button1>

        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.sut_white,
        alignItems: 'center',
        alignContent: 'center',
        paddingTop:20
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
      textinput2: {
        borderColor: colors.sut_grey7d,
        borderWidth: 1,
        height: 550,
        width: 370,
        borderRadius: 10,
        paddingLeft: 15,
        marginBottom: 15,
        color: colors.sut_white,
        fontFamily: 'Kanit-Regular',
        fontSize: 16,
        textAlignVertical: 'top'
      }
});

export default SendQuestionScreen