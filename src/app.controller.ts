import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { UserEnum } from './common/enums/user.enum';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern(UserEnum.GET_USER)
  getUser() {
    console.log('message received in getUser');
    return {
      id: 1,
      name: 'ali',
    };
  }
  @MessagePattern(UserEnum.GET_USER_BY_ID)
  getUserById() {
    console.log('message received in getUserById');
    return {
      id: 1,
    };
  }
  @EventPattern(UserEnum.USER_MESSAGE)
  getUserMessage() {
    console.log('message received in getUserMessage');
  }
  @EventPattern(UserEnum.USER_CREATE)
  getUserCreated() {
    console.log('a user has been created');
  }
}
