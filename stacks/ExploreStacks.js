import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import colors from '../factors/colors';

import screenRoutes from '../factors/screensRoutes';
import ARTICLES from '../screens/explorescreens/ArticlesScreen';
import ARTICLEDETAIL from '../screens/explorescreens/ArticleDetailScreen';

const Stack = createNativeStackNavigator();

const ExploreStacks = () => {
    return (
        <Stack.Navigator screenOptions={{
          headerTitleStyle: {
              fontFamily: 'Kanit-Medium',
              color: colors.sut_darkblue,
          },
          headerTitleAlign: 'center',
          headerTintColor: colors.sut_darkblue,
          headerStyle: { backgroundColor: colors.sut_white },
      }}>
        <Stack.Screen
        name="ExploreScreen"
        component={screenRoutes.EXPLORE}
        options={{ headerShown: true, headerTitle: "สำรวจ" }}
      />
      <Stack.Screen
        name="ArticlesScreen"
        component={ARTICLES}
        options={{ headerShown: true, headerTitle: "บทความ" }}
      />
      <Stack.Screen
        name="ArticleDetailScreen"
        component={ARTICLEDETAIL}
        options={{ headerShown: true, headerTitle: "บทความ" }}
      />
        </Stack.Navigator>
    );
};

export default ExploreStacks;