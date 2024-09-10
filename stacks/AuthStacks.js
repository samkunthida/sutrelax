import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import colors from '../factors/colors'
import stringTH from '../factors/strings'

import screenRoutes from '../factors/screensRoutes';
import MENUSTACKS from './MenuStacks';
import REGSUBSTACKS from './RegSubStacks';

const AuthStacks = () => {
  const Stack = createNativeStackNavigator();
    return (

        <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: 'Kanit-Medium',
          color: colors.sut_white,
        },
        headerTitleAlign: 'center',
        headerTintColor: colors.sut_white,
        headerStyle: { backgroundColor: colors.sut_darkblue },
      }}
    >
      <Stack.Screen
        name="Splash"
        component={screenRoutes.SPLASH}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={screenRoutes.REGISTER}
        options={{ headerShown: true, title: stringTH.createAccount }}
      />
      <Stack.Screen
        name="Login"
        component={screenRoutes.LOGIN}
        options={{ headerShown: true, headerTitle: stringTH.login }}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={screenRoutes.FORGETPASSWORD}
        options={{ headerShown: true, headerTitle: stringTH.forgetPassword }}
      />
      <Stack.Screen
        name="MenuStack"
        component={MENUSTACKS}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegSubStack"
        component={REGSUBSTACKS}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
    );
};

export default AuthStacks;