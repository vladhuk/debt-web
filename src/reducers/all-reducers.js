import {combineReducers} from "redux";
import {friendsReducer} from "./friends-reducer";
import {accessTokenReducer} from "./access-token-reducer";
import {blacklistReducer} from "./blacklist-reducer";
import {friendRequestsReducer} from "./friend-requests-reducer";
import {groupsReducer} from "./groups-reducer";
import {debtsReducer} from "./debts-reducer";
import {debtRequestsReducer} from "./debt-request-reducer";
import {repaymentRequestsReducer} from "./repayment-requests-reducer";
import {usersReducer} from "./users-reducer";

const allReducers = combineReducers({
    friends: friendsReducer,
    accessToken: accessTokenReducer,
    blacklist: blacklistReducer,
    friendRequests: friendRequestsReducer,
    groups: groupsReducer,
    debts: debtsReducer,
    debtRequests: debtRequestsReducer,
    repaymentRequests: repaymentRequestsReducer,
    users: usersReducer,
});

export default allReducers;