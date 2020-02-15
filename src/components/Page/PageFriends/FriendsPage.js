import {NavigationFriendsSidebar} from "../../Navigation";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {SidebarFriendsPage} from "../../Sidebar";


function FriendsPage() {
    return <BrowserRouter>
        <SidebarFriendsPage/>
        <NavigationFriendsSidebar/>
    </BrowserRouter>
}

export {FriendsPage};