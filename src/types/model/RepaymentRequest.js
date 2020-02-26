// @flow

import type { Request } from './Request';
import type { Order } from './Order';

export type RepaymentRequest = {|
  order?: Order,
  ...Request,
|};
