import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';

// Import factors
import colors from '../../../factors/colors';

// Import components
import MenuCard9 from '../../../components/MenuCard9';

const NotificationScreen = ({ navigation }) => {

    const handleAccount = () => {
        navigation.navigate('AccountScreen');
    }
    
    return (
        <View style={styles.container}>
            <ScrollView>
                <MenuCard9 topic={'แจ้งเตือนให้กำลังใจ'} onPress={handleAccount}/>
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
