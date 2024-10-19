import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';

// Import factors
import colors from '../../factors/colors';

// Import components
import MenuCard4 from '../../components/MenuCard4';

// Import dependencies
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const AssessmentHistoryScreen = ({ navigation }) => {
    const [assessments, setAssessments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userID, setUserID] = useState('');

    const getData = async () => {
        const token = await AsyncStorage.getItem('token');
        try {
            const res = await axios.post("http://192.168.1.42:8000/userData", { token: token });
            console.log(res.data);
            setUserID(res.data.data._id); // Assuming userID is in res.data.data._id
        } catch (error) {
            console.error('Error fetching user data:', error);
            setLoading(false); // Stop loading on error
        }
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        const fetchAssessments = async () => {
            if (userID) {
                try {
                    const response = await axios.post('http://192.168.1.42:8000/userAssessmentHistoryFetch', {
                        userID: userID,
                    });

                    if (response.data.status === 'Ok') {
                        setAssessments(response.data.data);
                    } else {
                        console.log(response.data.data); // Handle no results case if necessary
                    }
                } catch (error) {
                    console.error('Error fetching assessments:', error);
                } finally {
                    setLoading(false); // Stop loading after fetching
                }
            }
        };

        fetchAssessments();
    }, [userID]);

    useEffect(() => {
        console.log('Assessments:', assessments); // Log assessments state
        console.log('Loading:', loading); // Log loading state
    }, [assessments, loading]);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {assessments.map((assessment) => (
                    <MenuCard4
                        key={assessment._id}
                        topic={assessment.assessmentTitle} 
                        point={assessment.score}
                        maxPoint={assessment.maxScore} // Adjust if needed or remove
                        date={assessment.dateCreated} // Adjust according to your needs
                    />
                ))}
            </ScrollView>
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
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.sut_white,
    },
});

export default AssessmentHistoryScreen;
