import { OrderPayload } from './OrderPayload';

export interface RepaymentRequestPayload {
  order: OrderPayload;
  comment: string;
}
