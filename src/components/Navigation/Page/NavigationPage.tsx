import React from 'react';
import { ProtectedNavigationPage } from './ProtectedNavigationPage';
import { PublicNavigationPage } from './PublicNavigationPage';

export function NavigationPage(): JSX.Element {
  return (
    <>
      <PublicNavigationPage />
      <ProtectedNavigationPage />
    </>
  );
}
