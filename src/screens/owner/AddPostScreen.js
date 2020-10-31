import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AddPostScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Add Post Component</Text>
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

export default AddPostScreen