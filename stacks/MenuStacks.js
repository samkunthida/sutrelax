import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import colors from '../factors/colors';
import stringTH from '../factors/strings';
import { FontAwesome6 } from '@expo/vector-icons';

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
                tabBarLabelStyle: {
                    fontFamily: 'Kanit-Regular',
                    fontSize: 12, 
                },
                tabBarStyle: {
                    height: 70, 
                    paddingBottom: 10, 
                    paddingTop: 10,
                },
                tabBarActiveTintColor: colors.sut_darkblue,
                tabBarInactiveTintColor: colors.sut_grey7d,
            }}
        >
            <Tab.Screen
                name="Home"
                component={HOMESTACKS}
                options={{
                    tabBarLabel: stringTH.home,
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <FontAwesome6 name="house" size={25} color={color} />
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
                    tabBarIcon: ({ color }) => (
                        <FontAwesome6 name="cubes" size={25} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={PROFILESTACKS}
                options={{
                    tabBarLabel: stringTH.profile,
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <FontAwesome6 name="user-large" size={25} color={color} />
                    ),
                }}
            />

        </Tab.Navigator>
    );
};

export default MenuStacks;