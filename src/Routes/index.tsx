import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';

import LoginPage from '../pages/Login';
import Registration from '../pages/Registration';
import Products from '../pages/Products';


const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />      
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="Registration" component={Registration} />
                <Stack.Screen name="ListProducts" component={Products} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
