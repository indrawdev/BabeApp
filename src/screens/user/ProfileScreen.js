import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Text>Profile</Text>
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

export default ProfileScreen
