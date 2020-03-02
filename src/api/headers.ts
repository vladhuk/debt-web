import { getToken } from '../util';
import HeadersBuilder from './HeadersBuilder';

type Header = { [key: string]: string };

const jsonHeader: Header = { 'Content-Type': 'application/json' };

const getAuthHeader = (): Header => ({
  Authorization: getToken(),
});

export const getBasicHeaders = (): Headers => new Headers(getAuthHeader());

export const getHeadersWithJsonBody = (): Headers =>
  new HeadersBuilder()
    .append(getBasicHeaders())
    .append(new Headers(jsonHeader))
    .build();
