import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersDTO } from './users.dto';
import { UsersService } from './users.service';
@Module({
  imports: [UsersModule],
  controllers: [UsersController],
  providers: [UsersService, UsersDTO],
})
export class UsersModule {}
