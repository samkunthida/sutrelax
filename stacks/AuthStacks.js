import React, { useCallback } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useFocusEffect, useNavigation } from '@react-navigation/native';

import colors from '../factors/colors'
import stringTH from '../factors/strings'

import screenRoutes from '../factors/screensRoutes';
import MENUSTACKS from './MenuStacks';
import REGSUBSTACKS from './RegSubStacks';

const AuthStacks = (route) => {
  const user = route?.params?.user || {}; 
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: { display: 'none' }
      });
  
      return () => {
        navigation.getParent()?.setOptions({
            tabBarStyle: [styles.tabBar, { backgroundColor:'#F0DFC8' }],
        });
      };
    }, [navigation])
  );

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
      {/* <Stack.Screen
        name="RegSubStack"
        component={REGSUBSTACKS}
        options={{ headerShown: false }}
      /> */}
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

export default AuthStacks;