import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const PostDetailScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Post Detail Screen</Text>
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

export default PostDetailScreen
