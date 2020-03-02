import { Status } from './Status';

export interface Order {
  id?: number;
  amount: number;
  status?: Status;
}
