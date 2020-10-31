import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/owner/DashboardScreen'
import AddPostScreen from '../screens/owner/AddPostScreen'

const Tab = createBottomTabNavigator();

const OwnerNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Dashboard" component={DashboardScreen} />
            <Tab.Screen name="AddPost" component={AddPostScreen} />
        </Tab.Navigator>
    )
}

export default OwnerNavigator
