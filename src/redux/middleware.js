import {ADD_POST} from "./postsReducer";
import {showAlert} from "./loaderReducer";

const forbidden = ['qwe', 'rty'];

export function spamBlockerMiddleware({dispatch}){
    return function (next){
        return function (action){
            if(action.type === ADD_POST){
                const found = forbidden.filter(word => action.payload.title.includes(word));
                if(found.length){
                    return dispatch(showAlert('спамер'))
                }
            }
            return next(action);
        }
    }
}