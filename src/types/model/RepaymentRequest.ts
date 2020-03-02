import { Request } from './Request';
import { Order } from './Order';

export interface RepaymentRequest extends Request {
  order?: Order;
}
