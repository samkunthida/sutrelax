import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';

// Import factors
import colors from '../../../factors/colors';

// Import components

import MenuCard8 from '../../../components/MenuCard8';
import MenuCard9 from '../../../components/MenuCard9';

const PrivacyScreen = ({ navigation }) => {

    const handleAccount = () => {
        navigation.navigate('AccountScreen');
    }
    
    return (
        <View style={styles.container}>
            <ScrollView>
                <MenuCard9 topic={'PIN'} onPress={handleAccount}/>
                <MenuCard8 topic={'เปลี่ยนรหัสผ่านบัญชี'} onPress={handleAccount}/>
                <MenuCard9 topic={'ใช้งาน Face ID'} onPress={handleAccount}/>
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

export default PrivacyScreen;
