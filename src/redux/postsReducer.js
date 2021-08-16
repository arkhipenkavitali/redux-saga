import {hideLoader, showAlert} from "./loaderReducer";

export const ADD_POST = 'ADD_POST'
export const FETCHED_POSTS = 'FETCHED_POSTS'
export const REQUEST_POSTS = 'FETCHED_POSTS'

const initialState = {
    posts: [],
    fetchedPosts: []
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:
            return {...state, posts: [...state.posts, action.payload]}
        case FETCHED_POSTS:
            return {...state, fetchedPosts: action.payload}
        default:
            return state;
    }
}

export const addPost = (post) => ({type: ADD_POST, payload: post})

//async actions

export const fetchPosts = () => {
    return {
        type: REQUEST_POSTS
    }
    // return async dispatch => {
    //     try {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    //         const json = await response.json()
    //
    //         dispatch({type: FETCHED_POSTS, payload: json})
    //         dispatch(hideLoader());
    //     } catch (e){
    //         dispatch(showAlert('server error'))
    //         dispatch(hideLoader())
    //     }
    //
    // }
}