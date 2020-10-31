import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './navigation/AppNavigator'
import OwnerNavigator from './navigation/OwnerNavigator'
import UserNavigator from './navigation/UserNavigator'
import DrawerNavigator from './navigation/DrawerNavigator'

const fetchFonts = () => {
  
}

const styles = StyleSheet.create({})

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  return (
    <NavigationContainer>
      <DrawerNavigator />
      <UserNavigator />
    </NavigationContainer>
  )
}