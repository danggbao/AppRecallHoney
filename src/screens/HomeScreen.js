import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="BoyScreen" component={BoyScreen} />
            <Tab.Screen name="GirlScreen" component={GirlScreen} />
        </Tab.Navigator>
    )
}