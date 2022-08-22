import { IsNumber, IsString } from "class-validator";
import { CreateMessageUtil } from "../../create-message.util"

export class CreateMessageDto {
  @IsString({
    message: CreateMessageUtil.prototype.typeCheck("string")
  })
  content: string

  @IsNumber({}, {
    message: CreateMessageUtil.prototype.typeCheck("number")
  })
  age: number
}