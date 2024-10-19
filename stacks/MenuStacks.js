import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import colors from '../factors/colors';
import stringTH from '../factors/strings';
import { FontAwesome } from '@expo/vector-icons';

import HOMESTACKS from './HomeStacks';
import EXPLORESTACKS from './ExploreStacks';
import PROFILESTACKS from './ProfileStacks';

const Tab = createBottomTabNavigator();

const MenuStacks = () => {
    return (
        <Tab.Navigator
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
            <Tab.Screen
                name="Home"
                component={HOMESTACKS}
                options={{
                    tabBarLabel: stringTH.home,
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Explore"
                component={EXPLORESTACKS}
                options={{
                    tabBarLabel: stringTH.exploer,
                    headerTitle: stringTH.exploer,
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="cubes" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={PROFILESTACKS}
                options={{
                    tabBarLabel: stringTH.profile,
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user" size={size} color={color} />
                    ),
                }}
            />

        </Tab.Navigator>
    );
};

export default MenuStacks;