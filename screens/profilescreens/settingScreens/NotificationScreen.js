import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';

// Import factors
import colors from '../../../factors/colors';

// Import components
import MenuCard7 from '../../../components/MenuCard7';

const NotificationScreen = ({ navigation }) => {

    const handleAccount = () => {
        navigation.navigate('AccountScreen');
    }
    
    return (
        <View style={styles.container}>
            <ScrollView>
                <MenuCard7 topic={'บัญชีผู้ใช้'} onPress={handleAccount}/>
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

export default NotificationScreen;
