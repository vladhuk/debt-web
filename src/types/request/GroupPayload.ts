import { UserPayload } from './UserPayload';

export interface GroupPayload {
  id?: number;
  title: string;
  members: UserPayload[];
}
