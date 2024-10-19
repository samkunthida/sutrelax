import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';

import colors from '../../../factors/colors';

//import components
import MenuCard3 from '../../../components/MenuCard3';

//import dependencies
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AssessmentQuestionScreen = ({ route }) => {
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

    if (currentQuestionIndex >= questions.length) {
        return (
            <View style={styles.container}>
                <Text>{assessmentTitle}</Text>
                <Text>ผลลัพธ์ของคุณ</Text>
                <Text style={styles.scoreText}>{totalScore} คะแนน</Text>
            </View>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <View style={styles.container}>
            <Text style={styles.questionText}>{currentQuestion.topic}</Text>
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionText: {
        fontSize: 20,
        marginBottom: 20,
        fontFamily: 'Kanit-Regular',
        color: colors.sut_darkblue,
    },
});

export default AssessmentQuestionScreen;
