import {combineReducers} from 'redux'
import postReducer from "./postReducer";
import userReducers from "./usersReducers";

export default combineReducers({
    posts :postReducer,
    users :userReducers,
})



