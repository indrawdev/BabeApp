import React, { useState, useEffect, useCallback, useReducer } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Input from '../../components/UI/Input'
import Colors from '../../constants/Colors'

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        }
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        }

        let updatedFormIsValid = true
        
        for (const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key]
        }

        return {
            formIsValid: updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updatedValues
        }
    }
    
    return state
}

const EditPostScreen = props => {

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()

    const postId = props.navigation.getParam('postId')
    //const editedPost = useSelector()

    const dispatch = useDispatch()
    


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
