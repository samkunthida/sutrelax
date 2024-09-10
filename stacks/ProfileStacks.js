import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import screenRoutes from '../factors/screensRoutes';

const Stack = createNativeStackNavigator();

const ProfileStacks = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen
        name="ProfileScreen"
        component={screenRoutes.PROFILE}
        options={{ headerShown: false }}
      />
      
        </Stack.Navigator>
    );
};

export default ProfileStacks;