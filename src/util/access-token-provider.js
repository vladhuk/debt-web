// @flow

import Cookies from 'universal-cookie';
import { ACCESS_TOKEN_COOKIE_NAME } from '../constants';

const cookies = new Cookies();

export function getToken(): string {
  return cookies.get(ACCESS_TOKEN_COOKIE_NAME);
}

export function setToken(token: string): void {
  cookies.set(ACCESS_TOKEN_COOKIE_NAME, token, { path: '/' });
}

export function deleteToken(): void {
  cookies.remove(ACCESS_TOKEN_COOKIE_NAME, { path: '/' });
}
