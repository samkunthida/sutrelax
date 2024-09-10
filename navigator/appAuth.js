import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screen components here
// import HomeScreen from './HomeScreen';
// import DetailsScreen from './DetailsScreen';

const LoginNav = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: {
                    fontFamily: 'Kanit-Medium',
                    color: colors.sut_white,
                },
                headerTitleAlign: 'center',
                headerTintColor: colors.sut_white,
                headerStyle: { backgroundColor: colors.sut_darkblue },
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="LoginScreens"
                component={LoginScreens}
                option={{ headerShown: false }}
            />
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
        </Stack.Navigator>
    );
};

const Stack = createStackNavigator();

const appAuth = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTitleStyle: {
                        fontFamily: 'Kanit-Medium',
                        color: colors.sut_white,
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: colors.sut_white,
                    headerStyle: { backgroundColor: colors.sut_darkblue },
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    name="LoginScreens"
                    component={LoginScreens}
                    option={{ headerShown: false }}
                />
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
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default appAuth;