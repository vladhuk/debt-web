// @flow

import { API_BASE_URL, HTTP_METHOD } from '../constants';
import type {
  ApiResponse,
  ApiResponseError,
  ApiResponseSuccess,
} from '../types/api';
import { getBasicHeaders, getHeadersWithJsonBody } from './headers';

type Callbacks = {|
  onRequest?: () => void,
  onSuccess?: ApiResponseSuccess => void,
  onError?: ApiResponseError => void,
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

// prettier-ignore
const withDefaultThen = ({ customFetch, onRequest, onSuccess, onError }: DefaultThenArgs): Promise<ApiResponse> => {
  onRequest && onRequest();

  return customFetch
    .then(response => response.text())
    .then((text: ?string) => JSON.parse(text || '{}'))
    .then((response: ApiResponse) => {
      if (response.error) {
        throw response.error;
      }
      onSuccess && onSuccess(response);
    })
    .catch((error: ApiResponseError) => {
      onError && onError(error);
    });
};

// prettier-ignore
export const getData = ({ resourcePath, onRequest, onSuccess, onError }: RequestArgs): Promise<ApiResponse> =>
  withDefaultThen({
    onRequest,
    onSuccess,
    onError,
    customFetch: fetch(API_BASE_URL + resourcePath, {
      method: HTTP_METHOD.GET,
      headers: getBasicHeaders(),
    }),
  });

// prettier-ignore
export const postData = ({ resourcePath, data, onRequest, onSuccess, onError }: PostRequestArgs): Promise<ApiResponse> =>
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

// prettier-ignore
export const updateData = ({ resourcePath, data, onRequest, onSuccess, onError }: PostRequestArgs): Promise<ApiResponse> =>
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

// prettier-ignore
export const deleteData = ({ resourcePath, onRequest, onSuccess, onError }: RequestArgs): Promise<ApiResponse> =>
  withDefaultThen({
    onRequest,
    onSuccess,
    onError,
    customFetch: fetch(API_BASE_URL + resourcePath, {
      method: HTTP_METHOD.DELETE,
      headers: getBasicHeaders(),
    }),
  });
