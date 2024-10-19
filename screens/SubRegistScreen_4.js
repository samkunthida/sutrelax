import { View, Text, StyleSheet, Image, Dimensions, TextInput, Pressable} from 'react-native'
import React from 'react'
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

//import factors
import colors from '../factors/colors'
import stringTH from '../factors/strings'
import images from '../factors/images';

//import components
import Button1 from '../components/Button1';

const SubRegisterScreen_4 = ({ navigation }) => {

    //useState Declaration
    const [dateOfBirth, setDateofBirth] = useState("");
    



    const nextButton = () => {
        navigation.navigate('MenuStack')
    }

    // Screen
    return (
        <View style={styles.container}>
        <View style={styles.contentContainer}>

        <View style={styles.topContainer}>
        <Image source={images.TOPSUBREG} style={styles.backgroundImage1} />
        </View>

            <Text style={styles.topic}>วันเดือนปีเกิดของคุณ?</Text>



            <View style={styles.buttonContainer}>
            <Button1 text='โอเค!' onPress={nextButton}></Button1>
            </View>
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
        textAlign: 'center',
        marginBottom:30,
        marginTop: 380
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
      backgroundImage1: {
        resizeMode: "contain",
        width: 420,
        height: 925,
        position: 'absolute',
        top: -300,
        left: -210,
      },
      secondContentContainer: {
        height: '100%',
        justifyContent: 'center',
      },
      buttonContainer: {
        marginTop: 250,
        alignItems: 'center',
        marginBottom: 65
      },
});

export default SubRegisterScreen_4