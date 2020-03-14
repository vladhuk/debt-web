import { User } from './User';

export interface Group {
  readonly id: number;
  readonly title: string;
  readonly owner: User;
  readonly members: User[];
}
