import {combineReducers} from "redux";
import {friendsReducer} from "./friends-reducer";
import {accessTokenReducer} from "./access-token-reducer";

const allReducers = combineReducers({
    friends: friendsReducer,
    accessToken: accessTokenReducer,
});

export default allReducers;