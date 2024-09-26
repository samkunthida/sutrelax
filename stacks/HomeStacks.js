import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import screenRoutes from '../factors/screensRoutes';

const Stack = createNativeStackNavigator();

const HomeStacks = () => {
    return (
        <Stack.Navigator>
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
        component={screenRoutes.ASSESSMENT}
        options={{ title: 'เลือกแบบประเมิน' }}
      />
      <Stack.Screen
        name="MyQuestionScreen"
        component={screenRoutes.MYQUESTION}
        options={{ title: 'คำถาม' }}
      />
      <Stack.Screen
        name="NotifyQuestionScreen"
        component={screenRoutes.NOTIFYQUESTION}
        options={{ title: 'สร้างคำถาม' }}
      />
      <Stack.Screen
        name="SendQuestionScreen"
        component={screenRoutes.SENDQUESTION}
        options={{ title: 'แจ้งเตือน' }}
      />
        </Stack.Navigator>
    );
};

export default HomeStacks;