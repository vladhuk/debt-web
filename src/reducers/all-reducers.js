import {combineReducers} from "redux";
import {friendsReducer} from "./friends-reducer";

const allReducers = combineReducers({
    friends: friendsReducer,
});

export default allReducers;