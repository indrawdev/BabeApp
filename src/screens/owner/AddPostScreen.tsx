import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AddPostScreen = ({ props }) => {
    
    const [title, setTitle] = useState();
    const [imageUrl, setImageUrl] = useState();
    const [price, setPrice] = useState(0);

    return (
        <View style={styles.screen}>
            <Text>Add Post Screen</Text>
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