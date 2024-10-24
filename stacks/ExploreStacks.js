import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import colors from '../factors/colors';

import screenRoutes from '../factors/screensRoutes';
import ARTICLES from '../screens/explorescreens/ArticlesScreen';
import ARTICLEDETAIL from '../screens/explorescreens/ArticleDetailScreen';
import VideoScreen from '../screens/explorescreens/VideoScreen';
import VideoDetailScreen from '../screens/explorescreens/VideoDetailScreen';

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
      <Stack.Screen
        name="VideoScreen"
        component={VideoScreen}
        options={{ headerShown: true, headerTitle: "วิดีโอ" }}
      />
      <Stack.Screen
        name="VideoDetailScreen"
        component={VideoDetailScreen}
        options={{ headerShown: true, headerTitle: "วิดีโอ" }}
      />

        </Stack.Navigator>
    );
};

export default ExploreStacks;