import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersDTO } from './users.dto';
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers() {
    return await this.usersService.getUsers();
  }
  @UsePipes(new ValidationPipe())
  @Post()
  async addUser(@Body() userDetails: UsersDTO) {
    return await this.usersService.addUser(userDetails);
  }
}

//http://localhost:3000/users?id=1&age=10
