import { API_BASE_URL, HTTP_METHOD } from '../constants';
import { getBasicHeaders, getHeadersWithJsonBody } from './headers';

interface Callbacks<ResponseBody> {
  onRequest?: () => void;
  onSuccess?: (data: ResponseBody) => void;
  onError?: (error: Error) => void;
}

interface DefaultThenArgs<ResponseBody> extends Callbacks<ResponseBody> {
  customFetch: Promise<Response>;
}

interface RequestArgs<ResponseBody> extends Callbacks<ResponseBody> {
  resourcePath: string;
}

interface PostRequestArgs<RequestBody, ResponseBody>
  extends RequestArgs<ResponseBody> {
  data?: RequestBody;
}

function withDefaultThen<ResponseBody>({
  customFetch,
  onRequest,
  onSuccess,
  onError,
}: DefaultThenArgs<ResponseBody>): Promise<void> {
  onRequest && onRequest();

  return customFetch
    .then(response => response.text())
    .then(text => JSON.parse(text || '{}'))
    .then(response => {
      if (response.error) {
        throw response.error;
      }
      onSuccess && onSuccess(response);
    })
    .catch((error: Error) => {
      onError && onError(error);
    });
}

export function getData<ResponseBody>({
  resourcePath,
  onRequest,
  onSuccess,
  onError,
}: RequestArgs<ResponseBody>): Promise<void> {
  return withDefaultThen({
    onRequest,
    onSuccess,
    onError,
    customFetch: fetch(API_BASE_URL + resourcePath, {
      method: HTTP_METHOD.GET,
      headers: getBasicHeaders(),
    }),
  });
}

export function postData<RequestBody, ResponseBody>({
  resourcePath,
  data,
  onRequest,
  onSuccess,
  onError,
}: PostRequestArgs<RequestBody, ResponseBody>): Promise<void> {
  return withDefaultThen({
    onRequest,
    onSuccess,
    onError,
    customFetch: fetch(API_BASE_URL + resourcePath, {
      method: HTTP_METHOD.POST,
      headers: getHeadersWithJsonBody(),
      body: JSON.stringify(data),
    }),
  });
}

export function putData<RequestBody, ResponseBody>({
  resourcePath,
  data,
  onRequest,
  onSuccess,
  onError,
}: PostRequestArgs<RequestBody, ResponseBody>): Promise<void> {
  return withDefaultThen({
    onRequest,
    onSuccess,
    onError,
    customFetch: fetch(API_BASE_URL + resourcePath, {
      method: HTTP_METHOD.PUT,
      headers: getHeadersWithJsonBody(),
      body: JSON.stringify(data),
    }),
  });
}

export function deleteData<ResponseBody>({
  resourcePath,
  onRequest,
  onSuccess,
  onError,
}: RequestArgs<ResponseBody>): Promise<void> {
  return withDefaultThen({
    onRequest,
    onSuccess,
    onError,
    customFetch: fetch(API_BASE_URL + resourcePath, {
      method: HTTP_METHOD.DELETE,
      headers: getBasicHeaders(),
    }),
  });
}
