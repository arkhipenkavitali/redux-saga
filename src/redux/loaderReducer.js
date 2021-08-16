const SHOW_LOADER = 'SHOW_LOADER'
const HIDE_LOADER = 'HIDE_LOADER'
const SHOW_ALERT = 'SHOW_ALERT'
const HIDE_ALERT = 'HIDE_ALERT'

const initialState = {
    loader: false,
    alert: null
}
export const loaderReducer = (state = initialState, action) => {
    switch (action.type){
        case SHOW_LOADER:
            return {...state, loader: true}
        case HIDE_LOADER:
            return {...state, loader: false}
        case SHOW_ALERT:
            return {...state, alert: action.payload}
        case HIDE_ALERT:
            return {...state, alert: null}
        default:
            return state;
    }
}

export const showLoader = () => ({type: SHOW_LOADER})
export const hideLoader = () => ({type: HIDE_LOADER})
export const showAlert = (text) => {
    return dispatch => {
        dispatch({type: SHOW_ALERT, payload: text})
        setTimeout(() => {
            dispatch(hideAlert())
        }, 3000)
    }
}
export const hideAlert = () => ({type: HIDE_ALERT})