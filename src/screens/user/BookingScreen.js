import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BookingScreen = () => {

    useEffect({

    }, [])

    const [modal, setModal] = useState([]);
    
    const submitHandler = useCallback(() => { 
        console.log("Submiting..")
    })

    return (
        <View style={styles.screen}>
            <Text></Text>
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

export default BookingScreen
