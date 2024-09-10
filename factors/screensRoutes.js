import SplashScreen from '../screens/SplashScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';

import SubRegistScreen1 from '../screens/SubRegistScreen_1';
import SubRegistScreen2 from '../screens/SubRegistScreen_2';
import SubRegistScreen3 from '../screens/SubRegistScreen_3';
import SubRegistScreen4 from '../screens/SubRegistScreen_4';

import HomeScreen from '../screens/homescreens/HomeScreen';
import ShakeScreen from '../screens/homescreens/ShakeScreen';
import myQuestionScreen from '../screens/homescreens/questionscreens/myQuestionScreen';
import sendQuestionScreen from '../screens/homescreens/questionscreens/sendQuestionScreen';
import notifyQuestionScreen from '../screens/homescreens/questionscreens/notifyQuestionScreen';

import ExploreScreen from '../screens/explorescreens/ExploreScreen';
import ProfileScreen from '../screens/profilescreens/ProfileScreen';

const ROUTES = {
  //SCREENS
    //ROUTE FOR App.js
    SPLASH: SplashScreen,
    REGISTER: RegisterScreen,
    LOGIN: LoginScreen,
    FORGETPASSWORD: ForgetPasswordScreen,

    SUBREGIS1: SubRegistScreen1,
    SUBREGIS2: SubRegistScreen2,
    SUBREGIS3: SubRegistScreen3,
    SUBREGIS4: SubRegistScreen4,

    HOME: HomeScreen,
    //ASSESSMENT: AssessmentScreen,
    SHAKE: ShakeScreen,
    //MYQUESTION: myQuestionScreen,
    //SENDQUESTION: sendQuestionScreen,
    //NOTIFYQUESTION: notifyQuestionScreen,

    EXPLORE: ExploreScreen ,
    PROFILE: ProfileScreen,

  };
  
  export default ROUTES;

