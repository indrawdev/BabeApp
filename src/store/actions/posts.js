export const CREATE_POST = 'CREATE_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'

export const createPost = (title, imageUrl, price) => {
    return {
        type: CREATE_POST,
        postData: {
            title,
            imageUrl,
            price
        }
    }
}

export const updatePost = (id, title, imageUrl, price) => {
    return {
        type: UPDATE_POST,
        pid: id,
        postData: {
            title,
            imageUrl,
            price
        }
    }
}

export const deletePost = postId => { 
    return {
        type: DELETE_POST,
        pid: postId
    }
}