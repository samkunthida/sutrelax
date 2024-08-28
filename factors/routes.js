import SplashScreen from '../screens/SplashScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';

import SubRegistScreen1 from '../screens/SubRegistScreen_1';
import SubRegistScreen2 from '../screens/SubRegistScreen_2';
import SubRegistScreen3 from '../screens/SubRegistScreen_3';
import SubRegistScreen4 from '../screens/SubRegistScreen_4';

import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import ProfileScreen from '../screens/ProfileScreen';

const ROUTES = {
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
    EXPLORE: ExploreScreen ,
    PROFILE: ProfileScreen,

  };
  
  export default ROUTES;

