import { User } from './User';

export interface Debt {
  readonly partner: User;
  readonly balance: number;
}
