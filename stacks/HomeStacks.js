import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import screenRoutes from '../factors/screensRoutes';
import colors from '../factors/colors';

import AssessmentChooseScreen from '../screens/homescreens/assessmentscreens/AssessmentChooseScreen';
import AssessmentQuestionScreen from '../screens/homescreens/assessmentscreens/AssessmentQuestionScreen';
import AssessmentHistoryScreen from '../screens/homescreens/AssessmentHistoryScreen';

const Stack = createNativeStackNavigator();

const HomeStacks = () => {
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
        name="HomeScreen"
        component={screenRoutes.HOME}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ShakeScreen"
        component={screenRoutes.SHAKE}
        options={{ title: 'ขอกำลังใจ!' }}
      />
      <Stack.Screen
        name="AssessmentScreen"
        component={AssessmentChooseScreen}
        options={{ title: 'เลือกแบบประเมิน' }}
      />
      <Stack.Screen
        name="AssessmentHistoryScreen"
        component={AssessmentHistoryScreen}
        options={{title: 'ประวัติการประเมิน'}}
      />
      <Stack.Screen
        name="AssessmentQuestionScreen"
        component={AssessmentQuestionScreen}
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        name="MyQuestionScreen"
        component={screenRoutes.MYQUESTION}
        options={{ title: 'คำถาม' }}
      />
      <Stack.Screen
        name="NotifyQuestionScreen"
        component={screenRoutes.NOTIFYQUESTION}
        options={{ title: 'แจ้งเตือน' }}
      />
      <Stack.Screen
        name="SendQuestionScreen"
        component={screenRoutes.SENDQUESTION}
        options={{ title: 'สร้างคำถาม' }}
      />
        </Stack.Navigator>
    );
};

export default HomeStacks;