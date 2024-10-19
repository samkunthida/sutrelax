import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import screenRoutes from '../factors/screensRoutes';
import colors from '../factors/colors';

import AssessmentHistoryScreen from '../screens/homescreens/AssessmentHistoryScreen';

import AUTHSTACKS from './AuthStacks';

const Stack = createNativeStackNavigator();

const ProfileStacks = () => {
    return (
      <Stack.Navigator
      screenOptions={{
          headerTitleStyle: {
              fontFamily: 'Kanit-Medium',
              color: colors.sut_darkblue,
          },
          headerTitleAlign: 'center',
          headerTintColor: colors.sut_darkblue,
          headerStyle: { backgroundColor: colors.sut_white },
      }}
  >
        <Stack.Screen
        name="ProfileScreen"
        component={screenRoutes.PROFILE}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AssessmentHistoryScreen"
        component={AssessmentHistoryScreen}
        options={{title: 'ประวัติการประเมิน'}}
      />
      <Stack.Screen
        name="Splash"
        component={AUTHSTACKS}
        options={{ headerShown: false }}
      />
        </Stack.Navigator>
    );
};

export default ProfileStacks;