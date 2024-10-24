import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';

// Import factors
import colors from '../../../factors/colors';

// Import components
import MenuCard6 from '../../../components/MenuCard6';

const SettingScreen = ({ navigation }) => {

    const handleAccount = () => {
        navigation.navigate('AccountScreen');
    }
    const handlePrivacy = () => {
        navigation.navigate('PrivacyScreen');
    }
    const handleNotification = () => {
        navigation.navigate('NotificationScreen');
    }
    


    return (
        <View style={styles.container}>
            <ScrollView>
                <MenuCard6 topic={'บัญชีผู้ใช้'} onPress={handleAccount}/>
                <MenuCard6 topic={'ความเป็นส่วนตัว'} onPress={handlePrivacy} />
                <MenuCard6 topic={'การแจ้งเตือน'} onPress={handleNotification} />
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

export default SettingScreen;
