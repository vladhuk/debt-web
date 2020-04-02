import { OrderPayload } from './OrderPayload';

export interface DebtRequestPayload {
  orders: OrderPayload[];
  comment: string;
}
