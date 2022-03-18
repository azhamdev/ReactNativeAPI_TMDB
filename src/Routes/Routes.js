import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import Home from '../Screens/Home';


const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
