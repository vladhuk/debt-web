import FriendsSidebarNavigation from "../navigation/FriendsSidebarNavigation";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import FriendsPageSidebar from "./sidebar/FriendsPageSidebar";


function FriendsPage() {
    return <BrowserRouter>
        <FriendsPageSidebar/>
        <FriendsSidebarNavigation/>
    </BrowserRouter>
}

export default FriendsPage;