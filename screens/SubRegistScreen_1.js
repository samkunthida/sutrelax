import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { useState, React } from 'react';
//import factors
import colors from '../factors/colors'
import stringTH from '../factors/strings'
import images from '../factors/images';
import { Alert } from 'react-native';

//import components
import Button1 from '../components/Button1';

const SubRegisterScreen_1 = ({ navigation }) => {

    // Functions
    const handleNext = async () => {  
          navigation.navigate('SubRegist_2');  
    }

    // Screen
    return (

      <View style={styles.container}>


        <View style={styles.topContainer}>
        <Image source={images.TOPSUBREG} style={styles.backgroundImage1} />
        </View>
        
        <View style={styles.secondContentContainer}>
        <Text style={styles.topic}>{stringTH.subreg_message1}</Text> 
        <View style={styles.buttonContainer}>
        <Button1 text={stringTH.ok2} onPress={handleNext}></Button1>
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
        marginTop: 380,
        fontFamily: 'Kanit-Regular',
        fontSize: 20,
        color: colors.sut_darkblue,
        textAlign: 'center'
      },
      secondContentContainer: {
        height: '100%',
        justifyContent: 'flex-end',
      },
      buttonContainer: {
        marginTop: 250,
        alignItems: 'center',
        marginBottom: 65
      },
      backgroundImage1: {
        resizeMode: "contain",
        width: 420,
        height: 925,
        position: 'absolute',
        top: -300,
        left: -210,
      },
});

export default SubRegisterScreen_1