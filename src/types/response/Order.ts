import { Status } from './Status';

export interface Order {
  readonly id: number;
  readonly amount: number;
  readonly status: Status;
}
