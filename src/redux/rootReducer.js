import {combineReducers} from "redux";
import {postsReducer} from "./postsReducer";
import {loaderReducer} from "./loaderReducer";

export const rootReducer = combineReducers({
    posts: postsReducer,
    loader: loaderReducer
})
