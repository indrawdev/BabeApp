import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import CategoriesScreen from '../screens/user/CategoriesScreen'
import CategoryPostsScreen from '../screens/user/CategoryPostsScreen'
import PostDetailScreen from '../screens/user/PostDetailScreen'

const Stack = createStackNavigator();


const AppNavigator = () => { 
    return (
        <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{ title: 'Categories' }}
            />
            <Stack.Screen
                name="CategoryPosts"
                component={CategoryPostsScreen}
                options={{ title: 'Category Post' }}
            />
            <Stack.Screen
                name="PostDetail"
                component={PostDetailScreen}
                options={{ title: 'Post Detail' }}
            />
        </Stack.Navigator>
    )
}

export default AppNavigator