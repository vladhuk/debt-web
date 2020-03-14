import { UserPayload } from './UserPayload';

export interface FriendRequestPayload {
  receiver: UserPayload;
  comment: string;
}
