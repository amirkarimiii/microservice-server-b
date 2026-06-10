import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('get-user')
  getHello() {
    console.log('message received');
    return {
      id: 1,
      name: 'ali',
    };
  }
}
