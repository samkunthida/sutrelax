import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

//import factors
import colors from '../../factors/colors'
import stringTH from '../../factors/strings'
import images from '../../factors/images'

import Button1 from '../../components/Button1';
import { useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';

const ShakeScreen = () => {



    const [text, setText] = useState('');
    const [shake, setShake] = useState(false);
    const randomText = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o"];

    const handleShake = () => {
        const randomIndex = Math.floor(Math.random() * randomText.length);
        setText(randomText[randomIndex]);
    }

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
        <View style={styles.container}>

            <View style={styles.topic1}>
            <Text style={styles.topic1}>{'" ' + text + ' "'}</Text>
            </View>
            <View>
            <Text style={styles.topic2}>{"ลองเขย่าดูสิ"}</Text>
            <Text>หรือ</Text>
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
        marginBottom: 16,
    },
    topic1: {
        fontFamily: 'Kanit-Medium',
        fontSize: 20,
        textAlign: 'center',
        color: colors.sut_darkblue,
        paddingBottom: 15
      },
      topic2: {
        fontFamily: 'Kanit-Medium',
        fontSize: 20,
        textAlign: 'center',
        color: colors.sut_darkblue,
        paddingBottom: 15
      },
      button: {
        backgroundColor: colors.sut_primary
      }
});

export default ShakeScreen;