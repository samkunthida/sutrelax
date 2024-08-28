import { View, Text, StyleSheet, Image, Dimensions, TextInput} from 'react-native'
import { useState, React } from 'react';

//import factors
import colors from '../factors/colors'
import stringTH from '../factors/strings'
import images from '../factors/images';

//import components
import GreySQButton from '../components/GreySQButton';
import LightGreySQButton from '../components/LightGreyButton';

const SubRegisterScreen_3 = ({ navigation }) => {

    // Functions
    const nextButton1 = () => {
        navigation.navigate('SubRegist_4')
        //add value
    }
    const nextButton2= () => {
        navigation.navigate('SubRegistScreen_4')
        //add value
    }
    const nextButton3 = () => {
        navigation.navigate('SubRegistScreen_4')
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
            <GreySQButton text = "เพศชาย" onPress={nextButton1}></GreySQButton>
            <GreySQButton text = "เพศหญิง" onPress={nextButton2}></GreySQButton>
            <LightGreySQButton text = "ไม่ระบุ" onPress={nextButton3}></LightGreySQButton>
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

});

export default SubRegisterScreen_3