import { View, Text, StyleSheet, Image, Dimensions, TextInput} from 'react-native'
import React from 'react'
import { useState } from 'react';

//import factors
import colors from '../../../factors/colors'
import stringTH from '../../../factors/strings'

//import components
import MenuCard3 from '../../../components/MenuCard3';

const AssessmentChooseScreen = ({ navigation }) => {

    // Functions
    const a = () => {
        navigation.navigate('a')
    }

    // Screen
    return (
        <View style={styles.container}>
            <MenuCard3 text="แบบวัดความเครียด" ></MenuCard3>
            <MenuCard3 text="แบบวัดความวิตกกังวล" ></MenuCard3>
            <MenuCard3 text="แบบประเมินภาวะหมดไฟ" ></MenuCard3>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.sut_white,
        alignItems: 'center',
        alignContent: 'center'
      }
});

export default AssessmentChooseScreen