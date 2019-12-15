import {combineReducers} from "redux";
import {friendsReducer} from "./friends-reducer";
import {accessTokenReducer} from "./access-token-reducer";
import {blacklistReducer} from "./blacklist-reducer";

const allReducers = combineReducers({
    friends: friendsReducer,
    accessToken: accessTokenReducer,
    blacklist: blacklistReducer,
});

export default allReducers;