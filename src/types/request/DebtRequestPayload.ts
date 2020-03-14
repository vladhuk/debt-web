import { OrderPayload } from './OrderPayload';

export interface DebtRequestPayload {
  order: OrderPayload[];
  comment: string;
}
