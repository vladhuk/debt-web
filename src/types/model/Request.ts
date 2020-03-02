import { Status } from './Status';
import { User } from './User';
import { DateAudit } from './DateAudit';

export interface Request extends DateAudit {
  id?: number;
  status?: Status;
  comment?: string;
  sender?: User;
}
