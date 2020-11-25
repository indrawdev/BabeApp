import React, { useEffect } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

import Colors from '../constants/Colors'
import AsyncStorage from '@react-native-async-storage/async-storage'


const StartupScreen = () => {

    useEffect(() => { 
        const tryLogin = async () => { 
            const userData = await AsyncStorage.getItem('userData')
            if (!userData) {
                //props.navigation.navigate('Auth')
                //return
            }

            const transformedData = JSON.parse(userData)
            const { token, userId, expiryDate } = transformedData
        }
        
    }, [])

    return (
        <View style={styles.screen}>
            <ActivityIndicator size="large" color={Colors.primary} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default StartupScreen