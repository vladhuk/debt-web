import { Request } from './Request';
import { User } from './User';

export interface FriendRequest extends Request {
  receiver?: User;
}
