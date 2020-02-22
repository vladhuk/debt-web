// @flow

export type ResponseError = {|
  timestamp: string,
  status: number,
  error: string,
  message: string,
  path: string,
|};
