import Post from '../../models/post'

export const CREATE_POST = 'CREATE_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const SET_POSTS = 'SET_POSTS'

export const fetchPosts = () => {
    return async dispatch => {
        try {
            const response = await fetch(
                'https://rn-babekost.firebaseio.com/posts.json'
            )

            if (!response.ok) {
                throw new Error('Something went wrong!')
            }

            const resData = await response.json()
            const loadedPosts = []

            for (const key in resData) {
                loadedPosts.push(
                    new Post(
                        key,
                        'p1',
                        resData[key].title,
                        resData[key].imageUrl,
                        resData[key].price
                    )
                )
            }

            dispatch({
                type: SET_POSTS,
                products: loadedPosts
            })

        } catch (err) {
            throw err
        }
    }
}

export const createPost = (title, imageUrl, price) => {
    return async dispatch => {
        const response = await fetch(`https://rn-babekost.firebaseio.com/posts.json`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    imageUrl,
                    price
                })
            }
        )

        const resData = await response.json();
        
        dispatch({
            type: CREATE_POST,
            postData: {
                title,
                imageUrl,
                price
            }
        })
    }
}

export const updatePost = (id, title, imageUrl, price) => {
    return async dispatch => {
        const response = await fetch(`https://rn-babekost.firebaseio.com/posts/${id}.json`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    imageUrl,
                    price
                })
            }
        );

        if (!response.ok) {
            throw new Error('Something went wrong!')
        }

        dispatch({
            type: UPDATE_POST,
            pid: id,
            postData: {
                title,
                imageUrl,
                price
            }
        })
    }
}

export const deletePost = postId => { 
    return async dispatch => {
        const response = await fetch(`https://rn-babekost.firebaseio.com/posts/${postId}.json`,{ method: 'DELETE' })
        
        if (!response.ok) {
            throw new Error('Something went wrong!')
        }

        dispatch({
            type: DELETE_POST,
            pid: postId
        })
    }
}