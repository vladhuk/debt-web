import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {SidebarDebtsPage} from '../Sidebar';
import {NavigationDebtsSidebar} from '../Navigation';

export function PageDebts() {
  return (
    <BrowserRouter>
      <SidebarDebtsPage />
      <NavigationDebtsSidebar />
    </BrowserRouter>
  );
}
