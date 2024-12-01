import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

//import factors
import colors from '../../factors/colors'
import stringTH from '../../factors/strings'
import images from '../../factors/images'

import Button1 from '../../components/Button1';
import { useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ShakeScreen = () => {

    const [text, setText] = useState('');
    const [shake, setShake] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState(colors.sut_white);
    const predefinedColors = [
        "#FFB3BA", // สีชมพูอ่อน
        "#FFDFBA", // สีส้มพาสเทล
        "#FFFFBA", // สีเหลืองพาสเทล
        "#BAFFC9", // สีเขียวพาสเทล
        "#BAE1FF", // สีฟ้าพาสเทล
        "#D5AAFF", // สีม่วงพาสเทล
        "#FFABE1"  // สีชมพูม่วงพาสเทล
    ];
    const [quote, setQuote] = useState('');

    const getData = async () => {
        const token = await AsyncStorage.getItem('token');
        console.log(token);
        axios
            .post('http://192.168.1.42:8000/quoteData', { token: token })
            .then(res => {
                console.log(res.data);
                setQuote(res.data.data.q_text);  // Access the quote text
            })
            .catch(error => {
                console.error("Error fetching quote:", error);
            });
    }

    useEffect(() => {
        getData()
    }, []);

    const handleShake = () => {
        //const randomIndex = Math.floor(Math.random() * randomText.length);
        //setText(randomText[randomIndex]);
        console.log("Quote", quote); 
        setText(quote);
        randomizeBackgroundColor();
        getData()
    }

    const randomizeBackgroundColor = () => {
        const randomIndex = Math.floor(Math.random() * predefinedColors.length);
        setBackgroundColor(predefinedColors[randomIndex]);
    };

    useEffect(() => {
        let subscription;
        Accelerometer.setUpdateInterval(100);
        subscription = Accelerometer.addListener(({ x, y, z }) => {
            const shaking = Math.abs(x) > 1.5 || Math.abs(y) > 1.2 || Math.abs(z) > 1.5;

            if (shaking && !shake) {
                setShake(true);
                handleShake();
            } else if (!shaking && shake) {
                setShake(false);
            }
        });

        return () => {
            if (subscription) {
                subscription.remove();
            }
        };
    }, [shake]);


    return (
        <View style={[styles.container, { backgroundColor }]}>

            <View style={styles.section1}>
                <Text style={styles.topic1}>{'" ' + text + ' "'}</Text>
            </View>
            <View style={styles.section2}>
                <Text style={styles.topic2}>{"ลองเขย่าดูสิ"}</Text>
                <Text style={styles.orText}>หรือ</Text>
                <Button1 style={styles.button} text="กดขอกำลังใจ" onPress={handleShake} ></Button1>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    section1: {
        paddingHorizontal: 15,
        position: 'absolute',
        width: '100%',
        top: 300
    },
    topic1: {
        fontFamily: 'Kanit-Medium',
        fontSize: 20,
        textAlign: 'center',
        color: colors.sut_darkblue,
    },
    topic2: {
        fontFamily: 'Kanit-Medium',
        fontSize: 24,
        textAlign: 'center',
        color: colors.sut_darkblue,
        marginBottom: 10
    },
    button: {
        backgroundColor: colors.sut_primary
    },
    orText: {
        textAlign: 'center',
        fontFamily: 'Kanit-Regular',
        color: colors.sut_grey7d,
        marginBottom: 10,
        fontSize: 16
    },
    section2: {
        marginTop: 500
    }

});

export default ShakeScreen;