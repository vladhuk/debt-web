// @flow

import { API_BASE_URL, HTTP_METHOD } from '../constants';
import type { ResponseError } from '../types';
import { getBasicHeaders, getHeadersWithJsonBody } from './headers';

type Callbacks = {|
  onRequest(): void,
  onSuccess(any): void,
  onError(ResponseError): void,
|};

type DefaultThenArgs = {|
  customFetch: Promise<any>,
  ...Callbacks,
|};

type RequestArgs = {|
  resourcePath: string,
  ...Callbacks,
|};

type PostRequestArgs = {|
  data: any,
  ...RequestArgs,
|};

type RequestReturnType = Promise<ResponseError | any>;

const withDefaultThen = ({ customFetch, onRequest, onSuccess, onError }: DefaultThenArgs): RequestReturnType => {
  onRequest && onRequest();

  return customFetch
    .then(response => response.text())
    .then((text: ?string) => (text ? JSON.parse(text) : '{}'))
    .then((response: ResponseError | any) => {
      if (response.error) {
        throw response.error;
      }
      onSuccess && onSuccess(response);
    })
    .catch((error: ResponseError) => {
      onError && onError(error);
    });
};

export const getData = ({ resourcePath, onRequest, onSuccess, onError }: RequestArgs): RequestReturnType =>
  withDefaultThen({
    onRequest,
    onSuccess,
    onError,
    customFetch: fetch(API_BASE_URL + resourcePath, {
      method: HTTP_METHOD.GET,
      headers: getBasicHeaders(),
    }),
  });

export const postData = ({ resourcePath, data, onRequest, onSuccess, onError }: PostRequestArgs): RequestReturnType =>
  withDefaultThen({
    onRequest,
    onSuccess,
    onError,
    customFetch: fetch(API_BASE_URL + resourcePath, {
      method: HTTP_METHOD.POST,
      headers: getHeadersWithJsonBody(),
      body: JSON.stringify(data),
    }),
  });

export const updateData = ({ resourcePath, data, onRequest, onSuccess, onError }: PostRequestArgs): RequestReturnType =>
  withDefaultThen({
    onRequest,
    onSuccess,
    onError,
    customFetch: fetch(API_BASE_URL + resourcePath, {
      method: HTTP_METHOD.PUT,
      headers: getHeadersWithJsonBody(),
      body: JSON.stringify(data),
    }),
  });

export const deleteData = ({ resourcePath, onRequest, onSuccess, onError }: RequestArgs): RequestReturnType =>
  withDefaultThen({
    onRequest,
    onSuccess,
    onError,
    customFetch: fetch(API_BASE_URL + resourcePath, {
      method: HTTP_METHOD.DELETE,
      headers: getBasicHeaders(),
    }),
  });
