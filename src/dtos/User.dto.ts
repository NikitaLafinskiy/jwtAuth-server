import { User } from '../@types/user';

export class UserDTO {
  id: number;
  email: string;
  isActive: boolean;
  activationLink: string;

  constructor({ email, id, isActive, activationLink }: User) {
    this.id = id;
    this.email = email;
    this.isActive = isActive;
    this.activationLink = activationLink;
  }
}
