import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './navigation/AppNavigator'

const fetchFonts = () => {
  
}

const styles = StyleSheet.create({})

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
}