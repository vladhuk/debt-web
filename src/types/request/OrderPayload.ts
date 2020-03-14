import { UserPayload } from './UserPayload';

export interface OrderPayload {
  receiver: UserPayload;
  amount: number;
}
