import React, { useState } from 'react'
import { StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'


import AppNavigator from './navigation/AppNavigator'
import OwnerNavigator from './navigation/OwnerNavigator'
import UserNavigator from './navigation/UserNavigator'
import DrawerNavigator from './navigation/DrawerNavigator'

const styles = StyleSheet.create({})

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}