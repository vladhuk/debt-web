import { User } from '../model';

export interface Debt {
  readonly partner: User;
  readonly balance: number;
}
