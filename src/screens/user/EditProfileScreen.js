import React, { useState, useEffect, useCallback } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'


const EditProfileScreen = props => {

    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState();

    const submitHandler = useCallback(() => { 
        console.log("Submiting..")
    })

    return (
        <ScrollView>
            <View style={styles.screen}>
                <Text>Edit Profile</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default EditProfileScreen