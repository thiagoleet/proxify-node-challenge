import { Controller, Post, Body } from '@nestjs/common';
import { RegisterUser, UserCreated } from '../../models/user';
import { generatePassword } from '../../util/password-gen';

@Controller('register')
export class RegisterController {
  @Post()
  register(@Body() user: RegisterUser): UserCreated {
    return {
      email: user.email,
      password: generatePassword(32),
    };
  }
}
