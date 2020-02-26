// @flow

import type { Dispatch } from './Dispatch';
import type { GetState } from './State';

export type Action = {|
  +type: string,
  +payload?: any,
|};

export type PromiseAction = Promise<Action>;

export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
