import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import screenRoutes from '../factors/screensRoutes';
import colors from '../factors/colors';

import AssessmentChooseScreen from '../screens/homescreens/assessmentscreens/AssessmentChooseScreen';
import AssessmentQuestionScreen from '../screens/homescreens/assessmentscreens/AssessmentQuestionScreen';
import AssessmentHistoryScreen from '../screens/homescreens/AssessmentHistoryScreen';
import SettingScreen from '../screens/profilescreens/settingScreens/SettingScreen';
import AccountScreen from '../screens/profilescreens/settingScreens/AccountScreen';
import PrivacyScreen from '../screens/profilescreens/settingScreens/PrivacyScreen';
import NotificationScreen from '../screens/profilescreens/settingScreens/NotificationScreen';
import EditAccountScreen from '../screens/profilescreens/settingScreens/EditAccountScreen';

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
        name="AssessmentScreen"
        component={AssessmentChooseScreen}
        options={{ title: 'เลือกแบบประเมิน' }}
      />
      <Stack.Screen
        name="AssessmentQuestionScreen"
        component={AssessmentQuestionScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{title: "การตั้งค่า"}}
      />
      <Stack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{title: "บัญชีผู้ใช้"}}
        />
      <Stack.Screen
        name="PrivacyScreen"
        component={PrivacyScreen}
        options={{title: "ความเป็นส่วนตัว"}}
        />
      <Stack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{title: "การแจ้งเตือน"}}
        />
      <Stack.Screen
        name="EditAccountScreen"
        component={EditAccountScreen}
        options={{title: "แก้ไขข้อมูล"}}
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