import {NavigationFriendsSidebar} from '../Navigation';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {SidebarFriendsPage} from '../Sidebar';

export function PageFriends() {
  return (
    <BrowserRouter>
      <SidebarFriendsPage />
      <NavigationFriendsSidebar />
    </BrowserRouter>
  );
}
