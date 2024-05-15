import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routes from '../utiles/routes'
import Home from '../screens/Home';
import Favorites from '../screens/Favorites';
import { MaterialIcons } from '@expo/vector-icons';
import Search from '../screens/Search'

const Tab = createBottomTabNavigator();

const BottomTaps = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={routes.home} 
            component={Home}
            options={
                {
                    header:()=>null,
                    tabBarIcon: ({focused}) => {
                        return (
                            focused?<MaterialIcons name="home" color="#03a9f4" size={23} /> : <MaterialIcons name="home" color="white" size={23} />
                        );
                      },
                      tabBarStyle: {
                        backgroundColor:"black"
                      },
                      tabBarActiveTintColor:"#03a9f4",
                      tabBarLabelStyle: {
                        fontSize:15
                      }
                }
            }></Tab.Screen>
             <Tab.Screen name={routes.search}
              component={Search}
              options={
                 {
                     header:()=>null,
                     tabBarIcon: ({focused}) => {
                         return (
                             focused?<MaterialIcons name="search" color="#03a9f4" size={23} /> : <MaterialIcons name="search" color="white" size={23} />
                         );
                       },
                       tabBarStyle: {
                         backgroundColor:"black"
                       },
                       tabBarActiveTintColor:"#03a9f4",
                       tabBarLabelStyle: {
                         fontSize:15
                       }
                 }
             }></Tab.Screen>
            <Tab.Screen name={routes.favorites}
             component={Favorites}
             options={
                {
                    header:()=>null,
                    tabBarIcon: ({focused}) => {
                        return (
                            focused?<MaterialIcons name="favorite" color="#03a9f4" size={23} /> : <MaterialIcons name="favorite" color="white" size={23} />
                        );
                      },
                      tabBarStyle: {
                        backgroundColor:"black"
                      },
                      tabBarActiveTintColor:"#03a9f4",
                      tabBarLabelStyle: {
                        fontSize:15
                      }
                }
            }></Tab.Screen>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({})

export default BottomTaps;
