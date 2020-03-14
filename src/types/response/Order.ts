import { Status } from './Status';
import { User } from './User';

export interface Order {
  readonly id: number;
  readonly amount: number;
  readonly status: Status;
  readonly receiver: User;
}
