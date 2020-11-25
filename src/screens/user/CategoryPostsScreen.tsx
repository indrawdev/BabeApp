import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const CategoryPostsScreen = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <Text>Category Posts Screen</Text>
            <Button
                title="Categories"
                onPress={() => navigation.navigate('Categories')}
            />
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

export default CategoryPostsScreen