import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';

import colors from '../../../factors/colors';

//import components
import MenuCard3 from '../../../components/MenuCard3';
import Button1 from '../../../components/Button1';

//import dependencies
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AssessmentQuestionScreen = ({ navigation, route }) => {
    const { questions, assessmentTitle, assessmentID } = route.params;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedChoice, setSelectedChoice] = useState(null);
    const [totalScore, setTotalScore] = useState(0);
    const [userID, setUserID] = useState('');

    useEffect(() => {
        async function fetchUserID() {
          const token = await AsyncStorage.getItem('token');
          axios.post("http://192.168.1.42:8000/userData", { token })
            .then(res => {
              setUserID(res.data.data._id);
            })
            .catch(err => {
              console.error("Error fetching user data:", err);
            });
        }
        fetchUserID();
      }, []);
      useEffect(() => {
        if (currentQuestionIndex >= questions.length && userID) {
          handleAssessmentCompletion();
        }
    }, [currentQuestionIndex, userID]);

    const handleChoiceSelect = (choice) => {
        setSelectedChoice(choice);
       
        setTotalScore(prevScore => prevScore + choice.point);

        setTimeout(() => {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedChoice(null);
        }, 500); 
        console.log("Current Question:", currentQuestion);
        console.log("choice point: " + choice.point + ", total score: " + totalScore);

    };

    const handleAssessmentCompletion = async () => {
        try {
          await axios.post('http://192.168.1.42:8000/sendAssessmentResult', {
            score: totalScore,
            userID: userID,
            assessmentID: assessmentID,
            dateCreated: new Date()
          });
          console.log("Result saved successfully!");
        } catch (error) {
          console.error("Error saving result:", error);
        }
    };

    const handleNext = () => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],  // 'NewScreen' คือชื่อของหน้าที่ต้องการจะนำทางไป
      });
    };

    if (currentQuestionIndex >= questions.length) {
        return (
            <View style={styles.containerResult}>
              <View style={styles.topicContainer}>
                <Text style={styles.topic}>{assessmentTitle}</Text>
              </View>

              <View style={styles.pointContainer}>
                <Text style={styles.scoreText}>{totalScore} คะแนน</Text>
              </View>

                <View style={styles.belowTextContainer}>
                  <Text style={styles.belowText}>การทำแบบประเมินทำให้คุณรู้จักใจตัวเองมากยิ่งขึ้น \n ลอง 'สำรวจ' ใน 'บทความ' และ 'วิดีโอ' เพิ่มเติมดูสิ</Text>
                </View>

                <View style={styles.buttonContainer}>
                <Button1 text="โอเค" onPress={handleNext} ></Button1>
                </View>

            </View>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <View style={styles.container}>
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>{currentQuestion.topic}</Text>
            </View>
            {currentQuestion.choices.map((choice, index) => (
                <MenuCard3
                    key={index}
                    text={choice.text}
                    onPress={() => handleChoiceSelect(choice)}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.sut_white,
    },
    containerResult: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: colors.sut_white,
    },
    questionContainer: {
      paddingHorizontal: 15,
    },
    questionText: {
        fontSize: 20,
        marginBottom: 20,
        fontFamily: 'Kanit-Regular',
        color: colors.sut_darkblue,
        textAlign: 'center',
    },
    scoreText: {
        fontSize: 24,
        fontFamily: 'Kanit-Medium',
        color: colors.sut_darkblue,
        textAlign: 'center',
        backgroundColor: colors.sut_white,
        width: '100%',
    },
    pointContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: 0.5,
        borderColor: colors.sut_grey7d,
        width:'90%',
        height: 200,
        borderRadius: 10,
    },
    belowText: {
        fontSize: 14,
        fontFamily: 'Kanit-Regular',
        color: colors.sut_darkblue,
        textAlign: 'center',
    },
    belowTextContainer: {
        marginTop: 30,
        width: '90%',
    },
    topic:{
        fontSize: 18,
        fontFamily: 'Kanit-Regular',
        color: colors.sut_darkblue,
    },
    topicContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 50
    },
    buttonContainer: {
      justifyContent: 'flex-end',
      flex: 1,
      marginBottom: 30
    },
    
});

export default AssessmentQuestionScreen;
