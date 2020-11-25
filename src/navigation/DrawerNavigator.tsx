import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/user/HomeScreen'
import FavoriteScreen from '../screens/user/FavoritesScreen'
import SearchScreen from '../screens/user/SearchScreen'
import ProfileScreen from '../screens/user/ProfileScreen'
import OwnerNavigator from '../navigation/OwnerNavigator'
import UserNavigator from '../navigation/UserNavigator'


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Dashboard">
            <Drawer.Screen name="Dashboard" component={UserNavigator} />
            <Drawer.Screen name="Favorites" component={UserNavigator} />
            <Drawer.Screen name="Search" component={UserNavigator} />
            <Drawer.Screen name="Profile" component={UserNavigator} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator
