import { Request } from './Request';
import { Order } from './Order';

export interface DebtRequest extends Request {
  readonly orders: Order[];
}
