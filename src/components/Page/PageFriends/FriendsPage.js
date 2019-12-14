import {NavigationFriendsSidebar} from "../../Navigation";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import FriendsPageSidebar from "./FriendsPageSidebar";


function FriendsPage() {
    return <BrowserRouter>
        <FriendsPageSidebar/>
        <NavigationFriendsSidebar/>
    </BrowserRouter>
}

export {FriendsPage};