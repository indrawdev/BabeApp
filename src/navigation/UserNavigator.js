import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/user/HomeScreen'
import FavoriteScreen from '../screens/user/FavoritesScreen'
import SearchScreen from '../screens/user/SearchScreen'
import ProfileScreen from '../screens/user/ProfileScreen'

const Tab = createBottomTabNavigator();

const UserNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Favorites" component={FavoriteScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default UserNavigator
