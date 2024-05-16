import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from '../utiles/routes';
import MovieDetails from '../screens/MovieDetails';
import Home from '../screens/Home';

const stack=createNativeStackNavigator()
const StackNavigation = () => {
    return (
        <stack.Navigator>
            <stack.Screen name={routes.tap} component={Home} options={{ headerShown: false }} />
            <stack.Screen name={routes.details} component={MovieDetails} options={{ headerShown: false }}/>
        </stack.Navigator>
    );
}

export default StackNavigation;
