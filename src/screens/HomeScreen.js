import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BoyScreen from './BoyScreen';
import GirlScreen from './GirlScreen';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
             name="BoyScreen" 
             option={{ tabBarIcon : () => <Text>🙆‍♂️</Text>}}
             component={BoyScreen} />
            <Tab.Screen 
            name="GirlScreen" 
            option={{ tabBarIcon : () => <Text>🙆‍♀️</Text>}}
            component={GirlScreen} />
        </Tab.Navigator>
    )
}


export default HomeScreen;