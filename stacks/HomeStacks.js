import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import screenRoutes from '../factors/screensRoutes';

const Stack = createNativeStackNavigator();

const HomeStacks = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen
        name="HomeScreen"
        component={screenRoutes.HOME}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ShakeScreen"
        component={screenRoutes.SHAKE}
        options={{ title: 'ขอกำลังใจ!' }}
      />
        </Stack.Navigator>
    );
};

export default HomeStacks;