import { StatusName } from '../types/model/Status';

export const API_BASE_URL = 'http://localhost:8080/api';
export const ACCESS_TOKEN_COOKIE_NAME = 'AccessToken';
export const HTTP_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};
export const STATUS: {
  SENT: StatusName;
  VIEWED: StatusName;
  ACCEPTED: StatusName;
  REJECTED: StatusName;
} = {
  SENT: 'SENT',
  VIEWED: 'VIEWED',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
};
