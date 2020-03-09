import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NavigationFriendsSidebar } from '../Navigation';
import { SidebarFriendsPage } from '../Sidebar';

export function PageFriends(): JSX.Element {
  return (
    <BrowserRouter>
      <SidebarFriendsPage />
      <NavigationFriendsSidebar />
    </BrowserRouter>
  );
}
