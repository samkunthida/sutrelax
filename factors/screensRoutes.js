import SplashScreen from '../screens/SplashScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';

import SubRegistScreen1 from '../screens/SubRegistScreen_1';
import SubRegistScreen2 from '../screens/SubRegistScreen_2';
import SubRegistScreen3 from '../screens/SubRegistScreen_3';
import SubRegistScreen4 from '../screens/SubRegistScreen_4';

import HomeScreen from '../screens/homescreens/HomeScreen';
import AssessmentHistoryScreen from '../screens/homescreens/AssessmentHistoryScreen';
import ShakeScreen from '../screens/homescreens/ShakeScreen';
import MyQuestionScreen from '../screens/homescreens/questionscreens/MyQuestionScreen';
import SendQuestionScreen from '../screens/homescreens/questionscreens/SendQuestionScreen';
import NotifyQuestionScreen from '../screens/homescreens/questionscreens/NotifyQuestionScreen';

import ExploreScreen from '../screens/explorescreens/ExploreScreen';
import ProfileScreen from '../screens/profilescreens/ProfileScreen';

import AssessmentScreen from '../screens/homescreens/assessmentscreens/AssessmentChooseScreen';
import AssessmentQuestionScreen from '../screens/homescreens/assessmentscreens/AssessmentQuestionScreen';

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
    ASSESSMENT: AssessmentScreen,
    ASSESSMENTQUESTION: AssessmentQuestionScreen,
    SHAKE: ShakeScreen,
    ASSESSMENTHISTORY: AssessmentHistoryScreen,
    MYQUESTION: MyQuestionScreen,
    SENDQUESTION: SendQuestionScreen,
    NOTIFYQUESTION: NotifyQuestionScreen,

    EXPLORE: ExploreScreen ,
    //ARTICLE: ArticleScreen,
    //VIDEO: VideoScreen,
    PROFILE: ProfileScreen,

  };
  
  export default ROUTES;

