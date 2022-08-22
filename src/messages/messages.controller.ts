import { CreateMessageDto } from './dtos/util/create-message.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    console.log("List all messages");
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
  }

  @Get("/:id")
  getMessage(@Param("id") id: number) {
    console.log(typeof id);
  }
}
