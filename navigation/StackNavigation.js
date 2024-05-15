import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import routes from '../utiles/routes';
import MovieDetails from '../screens/MovieDetails';
import { BottomNavigation } from 'react-native-paper';
import BottomTaps from './BottomTaps';

const stack=createNativeStackNavigator()
const StackNavigation = () => {
    return (
        <stack.Navigator>
            <stack.Screen name={routes.tap} component={BottomTaps} options={{ headerShown: false }}/>
            <stack.Screen name={routes.home} component={Home} options={{ headerShown: false }}/>
            <stack.Screen name={routes.details} component={MovieDetails}/>
        </stack.Navigator>
    );
}

export default StackNavigation;
