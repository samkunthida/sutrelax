import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'


// import factors
import colors from './factors/colors'
import stringTH from './factors/strings'
import ROUTES from './factors/routes'

// import dependencies
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';


// Navigation Variables
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export class App extends Component {
  render() {

    return (
      
      <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: 'Kanit-Medium',
          color: colors.sut_white},
        headerTitleAlign: 'center',
        headerTintColor: colors.sut_white,
        headerStyle: {backgroundColor: colors.sut_darkblue},
        headerShown: false
      }}
      >
        <Stack.Screen
          name="LoginStack"
          component={LoginStack}
          option={{headerShown: false}}
        />
        <Stack.Screen 
          name="HomeStack"
          component={HomeStack}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="RegSubStack"
          component={RegSubStack}
          options={{headerShown: false}}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}

function LoginStack(){
  return(
      <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: 'Kanit-Medium',
          color: colors.sut_white},
        headerTitleAlign: 'center',
        headerTintColor: colors.sut_white,
        headerStyle: {backgroundColor: colors.sut_darkblue}
      }}
      >
        <Stack.Screen
          name="Splash"
          component={ROUTES.SPLASH}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Register"
          component={ROUTES.REGISTER}
          options={{headerShown: true, title: stringTH.createAccount}}
        />
        <Stack.Screen 
          name="Login"
          component={ROUTES.LOGIN}
          options={{headerShown: true, headerTitle: stringTH.login}}
        />
        <Stack.Screen 
          name="ForgetPassword"
          component={ROUTES.FORGETPASSWORD}
          options={{headerShown: true, headerTitle: stringTH.forgetPassword}}
        />
        <Stack.Screen 
          name="HomeStack"
          component={HomeStack}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="RegSubStack"
          component={RegSubStack}
          options={{headerShown: false}}
        />
        
      </Stack.Navigator>
  )
}

function RegSubStack(){
  return(

      <Stack.Navigator>
        <Stack.Screen
          name="SubRegist_1"
          component={ROUTES.SUBREGIS1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SubRegist_2"
          component={ROUTES.SUBREGIS2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SubRegist_3"
          component={ROUTES.SUBREGIS3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SubRegist_4"
          component={ROUTES.SUBREGIS4}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
  )
}

function HomeStack(){
  return(
    <Tab.Navigator
    screenOptions={{
      headerTitleStyle: {
        fontFamily: 'Kanit-Medium',
        color: colors.sut_darkblue},
      headerTitleAlign: 'center',
      headerTintColor: colors.sut_darkblue,
      headerStyle: {backgroundColor: colors.sut_white}
    }}>
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
  )
}

export default App