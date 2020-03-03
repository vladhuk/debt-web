import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { State } from './State';

export interface CustomAction {
  readonly type: string;
  readonly payload?: any;
}

export type CustomThunkAction = ThunkAction<
  void,
  State,
  unknown,
  Action<string>
>;
