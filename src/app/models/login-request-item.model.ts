import { ClientType } from './client-type.model';

export class LoginRequestItem {
  constructor(
    public clientType?: ClientType,
    public email?: String,
    public password?: String
  ) {}
}
