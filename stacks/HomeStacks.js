import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screen components here
// import HomeScreen from './HomeScreen';
// import DetailsScreen from './DetailsScreen';

const Stack = createStackNavigator();

const HomeStack1 = () => {
    return (
        <NavigationContainer>
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
        </NavigationContainer>
    );
};

export default HomeStack1;