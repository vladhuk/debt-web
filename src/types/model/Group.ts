import { User } from './User';

export interface Group {
  id?: number;
  title?: string;
  owner?: User;
  members?: User[];
}
