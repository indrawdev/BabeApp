import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/user/HomeScreen'
import FavoriteScreen from '../screens/user/FavoritesScreen'
import SearchScreen from '../screens/user/SearchScreen'
import ProfileScreen from '../screens/user/ProfileScreen'


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Favorites" component={FavoriteScreen} />
            <Drawer.Screen name="Search" component={SearchScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator
