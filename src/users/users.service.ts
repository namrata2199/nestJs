import { Injectable } from '@nestjs/common';
import { UsersDTO } from './users.dto';
import { USERS } from './users.mock';

@Injectable()
export class UsersService {
  users = USERS;
  getUsers(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.users);
    });
  }

  addUser(user: UsersDTO): Promise<any> {
    return new Promise((resolve) => {
      this.users.push(user);
      resolve(this.users);
    });
  }
}
