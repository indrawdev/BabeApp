import POSTS from '../../data/dummy-data'
import {
    CREATE_POST,
    UPDATE_POST,
    DELETE_POST,
    SET_POSTS
} from '../actions/posts'

import Post from '../../models/post'

const initialState = {
    availablePosts: POSTS,
    userPosts: POSTS.filter(post => post.ownerId === 'u1')
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                availablePosts: action.posts,
                userPosts: action.posts.filter(post => post.ownerId === 'u1')
            }
        case CREATE_POST:
            const newPost = new Post(
                action.postData.id,
                'u1',
                action.postData.title,
                action.postData.imageUrl,
                action.postData.price
            )
            return {
                ...state,
                availablePosts: state.availablePosts.concat(newPost),
                userPosts: state.userPosts.concat(newPost)
            }
        case UPDATE_POST:
            const postIndex = state.userPosts.findIndex(
                post => post.id === action.pid

            )
            const updatedPost = new Post(
                action.pid,
                state.userPosts[postIndex].ownerId,
                action.postData.title,
                action.postData.imageUrl,
                state.userPosts[postIndex].price
            )
            const updatedUserPosts = [...state.userPosts]
            
            updatedUserPosts[postIndex] = updatedPost
            
            const availablePostIndex = state.availablePosts.findIndex(
                post => post.id === action.pid
            )

            const updatedAvailablePosts = [...state.availablePosts]

            updatedAvailablePosts[availablePostIndex] = updatedPost

            return {
                ...state,
                availablePosts: updatedAvailablePosts,
                userPosts: updatedUserPosts
            }
        case DELETE_POST:
            return {
                ...state,
                userPosts: state.userPosts.filter(
                    post => post.id !== action.pid
                ),
                availablePosts: state.availablePosts.filter(
                    post => post.id !== action.pid
                )
            }
    }
    return state
}