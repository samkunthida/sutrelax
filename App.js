import { Text, View } from 'react-native'
import React, { Component } from 'react'
import colors from './colors'
//Import screens
import SplashScreen from './screens/SplashScreen'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'
import ForgetPasswordScreen from './screens/ForgetPasswordScreen'

import SubRegistScreen_1 from './screens/SubRegistScreen_1'
import SubRegistScreen_2 from './screens/SubRegistScreen_2'
import SubRegistScreen_3 from './screens/SubRegistScreen_3'
import SubRegistScreen_4 from './screens/SubRegistScreen_4'

import HomeScreen from './screens/HomeScreen'
import ExploreScreen from './screens/ExploreScreen'
import ProfileScreen from './screens/ProfileScreen'

//Navigation Dependencies
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import { useFonts } from 'expo-font';

//Navigation Variables
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export class App extends Component {
  render() {

    //for font loader
    // const [fontsLoaded] = useFonts({
    //   Font1: require('./assets/fonts/Kanit-Regular.ttf'),
    // });

    return (
      
      <NavigationContainer>
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
          name="FirstSplash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="RegisterScreen"
          component={RegisterScreen}
          options={{headerShown: true, title: "สร้างบัญชีผู้ใช้"}}
        />
        <Stack.Screen 
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: true, headerTitle: "เข้าสู่ระบบ"}}
        />
        <Stack.Screen 
          name="ForgetPasswordScreen"
          component={ForgetPasswordScreen}
          options={{headerShown: true, headerTitle: "ลืมรหัสผ่าน"}}
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

function RegSubStack(){
  return(

      <Stack.Navigator>
        <Stack.Screen
          name="SubRegistScreen_1"
          component={SubRegistScreen_1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SubRegistScreen_2"
          component={SubRegistScreen_2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SubRegistScreen_3"
          component={SubRegistScreen_3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SubRegistScreen_4"
          component={SubRegistScreen_4}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
  )
}

function HomeStack(){
  return(
    <Tab.Navigator>
      <Tab.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        tabBarLabel: 'หน้าหลัก',
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="home" size={size} color={color} />
      ),
      }}
      />
      <Tab.Screen
      name="ExploreScreen"
      component={ExploreScreen}
      options={{
        tabBarLabel: 'สำรวจ',
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="cubes" size={size} color={color} />
      ),
      }}
      />
      <Tab.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'โปรไฟล์',
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