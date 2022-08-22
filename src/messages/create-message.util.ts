import { ValidationArguments } from "class-validator";

export class CreateMessageUtil {
  typeCheck(type) {
    return (args: ValidationArguments) => {
      return `${args.property} must be a ${type}. You provide ${typeof args.value}`;
    }
  }
}