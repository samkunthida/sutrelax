import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import screenRoutes from '../factors/screensRoutes';

const Stack = createNativeStackNavigator();

const RegSubStacks = (route) => {
    const { user } = route.params;
    return (
        <Stack.Navigator>
      <Stack.Screen
        name="SubRegist_1"
        component={screenRoutes.SUBREGIS1}
        options={{ headerShown: false }}
        initialParams={{ user }} 
      />
      <Stack.Screen
        name="SubRegist_2"
        component={screenRoutes.SUBREGIS2}
        options={{ headerShown: false }}
        initialParams={{ user }} // Pass userData to SubRegist_2
      />
      <Stack.Screen
        name="SubRegist_3"
        component={screenRoutes.SUBREGIS3}
        options={{ headerShown: false }}
        initialParams={{ user }} // Pass userData to SubRegist_3
      />
      <Stack.Screen
        name="SubRegist_4"
        component={screenRoutes.SUBREGIS4}
        options={{ headerShown: false }}
        initialParams={{ user }} // Pass userData to SubRegist_4
      />
    </Stack.Navigator>
    );
};

export default RegSubStacks;