import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BookingScreen = () => {

    const [modal, setModal] = useState([]);
    
    const submitHandler = useCallback(() => { 
        console.log("Submiting..")
    })

    return (
        <View>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default BookingScreen
