import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login';
import Sign from '../pages/Sign';
import Main from '../pages/Main/Main';

const Stack = createNativeStackNavigator();

const Route = () => {
    const AuthStack = () => {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Sign' component={Sign} />
            </Stack.Navigator>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='AuthStack' component={AuthStack} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name='Main' component={Main} options={{
                    headerShown: true,
                    title: 'Odalar',
                    headerBackButtonMenuEnabled: false,
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Route;