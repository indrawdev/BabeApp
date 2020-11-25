import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import * as postsActions from '../../store/actions/posts'
import Colors from '../../constants/Colors'

const PostsOverviewScreen = props => {
    const [isLoading, setIsLoading] = useState(false)
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [error, setError] = useState()

    const posts = useSelector(state => state.posts.availablePosts)
    const dispatch = useDispatch()

    const loadPosts = useCallback(async () => { 
        setError(null)
        setIsRefreshing(true)

        try {
            await dispatch(postsActions.fetchPosts())
        } catch (err) {
            setError(err.message)
        }

        setIsRefreshing(false)

    }, [dispatch, setIsLoading, setError])

    useEffect(() => { 
        const willFocusSub = props.navigation.addListener(
            'willFocus',
            loadPosts
        )

        return () => { 
            willFocusSub.remove()
        }
    }, [loadPosts])

    useEffect(() => { 
        setIsLoading(true)
        loadPosts().then(() => { 
            setIsLoading(false)
        })
    }, [dispatch, loadPosts])


    return (
        <View>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default PostsOverviewScreen