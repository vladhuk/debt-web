// @flow

export type ApiResponseError = {|
  timestamp: string,
  status: number,
  error: string,
  message: string,
  path: string,
|};
