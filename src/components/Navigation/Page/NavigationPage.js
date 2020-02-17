import React from 'react';
import {ProtectedNavigationPage} from './ProtectedNavigationPage';
import {PublicNavigationPage} from './PublicNavigationPage';

export function NavigationPage() {
  return (
    <>
      <PublicNavigationPage />
      <ProtectedNavigationPage />
    </>
  );
}
