import React, { useEffect, useState } from 'react';
import { LogBox } from 'react-native';

// import factors
import stackRoutes from './factors/stacksRoutes';
// import dependencies
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function getData() {
      const data = await AsyncStorage.getItem('isLoggedIn');
      setIsLoggedIn(data === 'true');
    }
    LogBox.ignoreAllLogs();
    getData();
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? <stackRoutes.MENUSTACKS /> : <stackRoutes.AUTHSTACKS />}
    </NavigationContainer>
  );
};

export default App;