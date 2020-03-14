import { DateAudit } from './DateAudit';

export interface User extends DateAudit {
  readonly id: number;
  readonly username: string;
  readonly name: string;
}
