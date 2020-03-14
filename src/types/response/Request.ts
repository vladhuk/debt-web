import { Status } from './Status';
import { User } from './User';
import { DateAudit } from './DateAudit';

export interface Request extends DateAudit {
  readonly id: number;
  readonly status: Status;
  readonly comment: string;
  readonly sender: User;
}
