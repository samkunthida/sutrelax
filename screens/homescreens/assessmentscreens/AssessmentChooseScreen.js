import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import React,{ useEffect, useState } from 'react';

//import factors
import colors from '../../../factors/colors';
import stringTH from '../../../factors/strings';

//import components
import MenuCard3 from '../../../components/MenuCard3';

//import dependencies
import axios from 'axios';

const AssessmentChooseScreen = ({ navigation }) => {

    const [assessments, setAssessments] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchAssessments = async () => {
        try {
            const response = await axios.post('http://192.168.1.42:8000/assessmentFetch');
            console.log("Assessments fetched:", response.data);
            if (response.data.status === "Ok") {
                setAssessments(response.data.data);  
            } else {
                console.error("Error fetching Assessments:", response.data.data);
            }
        } catch (error) {
            console.error("Error fetching Assessments:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAssessments();  
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color={colors.sut_darkblue} />;
    }

    // Screen
    return (
        <ScrollView style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.menuContainer1}>
                    {assessments.map(assessment => (
                        <MenuCard3
                        key={assessment._id} 
                        text={assessment.title}
                        onPress={() => navigation.navigate('AssessmentQuestionScreen', {
                            questions: assessment.questions,
                            assessmentTitle: assessment.title, 
                            assessmentID: assessment._id
                        })}
                        icon=""
                        iconColor={colors.sut_white}
                        style={styles.menu}
                    />
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.sut_white,
    },
      contentContainer: {
          width: '100%',
          paddingTop: 10,
          alignItems: 'center',
      },
      menuContainer1: {
      },
      menu: {
          
      }
});

export default AssessmentChooseScreen