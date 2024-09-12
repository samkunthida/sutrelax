import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import screenRoutes from '../factors/screensRoutes';
import ARTICLES from '../screens/explorescreens/ArticlesScreen';

const Stack = createNativeStackNavigator();

const ExploreStacks = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen
        name="ExploreScreen"
        component={screenRoutes.EXPLORE}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ArticlesScreen"
        component={ARTICLES}
        options={{ headerShown: false }}
      />
        </Stack.Navigator>
    );
};

export default ExploreStacks;