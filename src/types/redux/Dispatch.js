// @flow

import type { Action, PromiseAction, ThunkAction } from './Action';

export type Dispatch = (
  action: Action | ThunkAction | PromiseAction | Array<Action>
) => any;
