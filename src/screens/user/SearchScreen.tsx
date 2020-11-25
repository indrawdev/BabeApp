import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SearchScreen = ({ navigation }) => {
    
    useEffect(() => {

    }, [])

    const submitHandler = () => {

    }

    return (
        <View style={styles.screen}>
            <Text>Search</Text>
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

export default SearchScreen
