import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native'
import { useState, React } from 'react';

//import factors
import colors from '../factors/colors'
import stringTH from '../factors/strings'
import images from '../factors/images';

//import components
import Button1 from '../components/Button1';

const SubRegisterScreen_2 = ({ navigation }) => {

    // Functions
    const [firstName, setFirstName] = useState('');
    const [firstNameVerify, setFirstNameVerify] = useState(false);
    const [lastName, setLastname] = useState('');

    const handleFirstName = (text) => {
      setFirstName(text);
    }
    const validateFirstName = () => {
      if (firstName && firstName.length >= 2) {
        setFirstNameVerify(true);
      }else{
        setFirstName(false);
      }
    }

    const handleNext = async () => {  
          if (!firstName) {
            Alert.alert("โปรดกรอกชื่อ ()");
            return;
          }

          navigation.navigate('SubRegist_3');  
    }

    // Screen
    return (
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.contentContainer}>

        <View style={styles.topContainer}>
        <Image source={images.TOPSUBREG} style={styles.backgroundImage1} />
        </View>

        <View style={styles.secondContentContainer}> 
        <Text style={styles.topic}>{stringTH.subreg_question1}</Text>
                
        <View style={styles.textInputContainer}>

        <TextInput style={styles.textinput1}
        placeholder={stringTH.firstName}
        placeholderTextColor={colors.sut_grey7d}
        />
        <TextInput style={styles.textinput1}
        placeholder={stringTH.lastName2}
        placeholderTextColor={colors.sut_grey7d}
        />

        </View>

        <View style={styles.buttonContainer}>
        <Button1 text={stringTH.ok2} onPress={handleNext}></Button1>
        </View>

        </View>
        </View>
        </View>
        </ScrollView>
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
        fontSize: 24,
        color: colors.sut_darkblue,
        textAlign: 'center'
      },
      topicContainer: {
        
      },
      buttonContainer: {
        marginTop: 150,
        alignItems: 'center',
        marginBottom: 65
      },
      textinput1: {
        borderColor: colors.sut_grey7d,
        borderWidth: 1,
        height: 45,
        width: 370,
        borderRadius: 10,
        paddingLeft: 15,
        marginBottom: 15,
        color: colors.sut_white,
        fontFamily: 'Kanit-Regular',
        fontSize: 16
      },
      textInputContainer: {
        marginTop: 30,
        alignItems: 'center'
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
        justifyContent: 'flex-end',
      },
});

export default SubRegisterScreen_2