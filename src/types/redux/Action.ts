import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { State } from './State';

export interface CustomAction<T> {
  readonly type: string;
  readonly payload?: T;
}

export type CustomThunkAction = ThunkAction<
  void,
  State,
  unknown,
  Action<string>
>;
