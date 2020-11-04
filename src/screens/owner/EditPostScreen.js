import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const EditPostScreen = props => {

    const [title, setTitle] = useState();
    const [imageUrl, setImageUrl] = useState();
    const [price, setPrice] = useState(0);

    const submitHandler = useCallback(() => { 
        
    })

    useEffect(() => { 
        
    })

    return (
        <View style={styles.screen}>
            <Text>Edit Screen</Text>
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

export default EditPostScreen
