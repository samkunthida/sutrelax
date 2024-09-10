import { Text, View, StyleSheet } from 'react-native';
import React, { Component, useEffect, useState } from 'react';

// import factors
import colors from './factors/colors';
import stringTH from './factors/strings';
import ROUTES from './factors/screensRoutes';

// import dependencies
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import SplashScreen from './screens/SplashScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Navigation Variables
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const LoginNav = () => {
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
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="LoginScreens"
        component={LoginScreens}
        option={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeStack"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegSubStack"
        component={RegSubStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function getData() {
      const data = await AsyncStorage.getItem('isLoggedIn');
      console.log(data, 'at app.js');
      setIsLoggedIn(data === 'true'); // Ensure boolean value
    }
    getData();
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? <HomeStack /> : <LoginNav />}
    </NavigationContainer>
  );
};

function LoginScreens() {
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
        component={ROUTES.SPLASH}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={ROUTES.REGISTER}
        options={{ headerShown: true, title: stringTH.createAccount }}
      />
      <Stack.Screen
        name="Login"
        component={ROUTES.LOGIN}
        options={{ headerShown: true, headerTitle: stringTH.login }}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ROUTES.FORGETPASSWORD}
        options={{ headerShown: true, headerTitle: stringTH.forgetPassword }}
      />
      <Stack.Screen
        name="HomeStack"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegSubStack"
        component={RegSubStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function RegSubStack({ route }) {
  const { user } = route.params; // Get userData from route params

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SubRegist_1"
        component={ROUTES.SUBREGIS1}
        options={{ headerShown: false }}
        initialParams={{ user }} 
      />
      <Stack.Screen
        name="SubRegist_2"
        component={ROUTES.SUBREGIS2}
        options={{ headerShown: false }}
        initialParams={{ user }} // Pass userData to SubRegist_2
      />
      <Stack.Screen
        name="SubRegist_3"
        component={ROUTES.SUBREGIS3}
        options={{ headerShown: false }}
        initialParams={{ user }} // Pass userData to SubRegist_3
      />
      <Stack.Screen
        name="SubRegist_4"
        component={ROUTES.SUBREGIS4}
        options={{ headerShown: false }}
        initialParams={{ user }} // Pass userData to SubRegist_4
      />
    </Stack.Navigator>
  );
}

//[Edit] route to each stack 
function HomeStack() {
  return (
    <Tab.Navigator
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
      <Tab.Screen
        name="Home"
        component={ROUTES.HOME}
        options={{
          tabBarLabel: stringTH.home,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ROUTES.EXPLORE}
        options={{
          tabBarLabel: stringTH.exploer,
          headerTitle: stringTH.exploer,
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="cubes" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ROUTES.PROFILE}
        options={{
          tabBarLabel: stringTH.profile,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
      
    </Tab.Navigator>

  );
}

export default App;