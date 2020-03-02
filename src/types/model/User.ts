import { DateAudit } from './DateAudit';

export interface User extends DateAudit {
  id?: number;
  username?: string;
  name?: string;
}
