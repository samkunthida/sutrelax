import { View, Text, StyleSheet, Image, Dimensions, TextInput, Button} from 'react-native'
import { useState, React } from 'react';

//import factors
import colors from '../factors/colors'
import stringTH from '../factors/strings'
import images from '../factors/images';

//import components
import Button1 from '../components/Button1';

const SubRegisterScreen_3 = ({ navigation }) => {

    // Functions
    const nextButton1 = () => {
        navigation.navigate('SubRegist_4')
        //add value
    }
    const nextButton2= () => {
        navigation.navigate('SubRegist_4')
        //add value
    }
    const nextButton3 = () => {
        navigation.navigate('SubRegis_4')
        //add value
    }


    // Screen
    return (
        <View style={styles.container}>
        <View style={styles.contentContainer}>

        <View style={styles.topContainer}>
        <Image source={images.TOPSUBREG} style={styles.backgroundImage1} />
        </View>
            
        <View style={styles.secondContentContainer}> 
            <Text style={styles.topic}>เพศสภาพของคุณ?</Text>
            <View style={styles.buttomContainer} >
            <Button1 text = "เพศชาย" onPress={nextButton1} style = {styles.greyButton}></Button1>
            <Button1 text = "เพศหญิง" onPress={nextButton2} style = {styles.greyButton}></Button1>
            <Button1 text = "ไม่ระบุ" onPress={nextButton3} style = {styles.lightGreyButton}></Button1>
            </View>
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
        marginTop: 155
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
      greyButton: {
        backgroundColor: colors.sut_grey7d,
        marginBottom: 10,
        borderRadius: 10
      },
      lightGreyButton: {
        backgroundColor: colors.sut_lightgrey,
        borderRadius: 10
      }

});

export default SubRegisterScreen_3