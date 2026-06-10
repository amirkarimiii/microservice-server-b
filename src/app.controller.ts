import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('get-user')
  getUser() {
    console.log('message received in getUser');
    return {
      id: 1,
      name: 'ali',
    };
  }
  @MessagePattern('get-user-by-id')
  getUserById() {
    console.log('message received in getUserById');
    return {
      id: 1,
    };
  }
}
