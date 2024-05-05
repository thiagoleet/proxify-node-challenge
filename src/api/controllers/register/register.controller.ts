import { Controller, Post, Body } from '@nestjs/common';
import { RegisterUserDto, UserCreatedDto } from 'src/api/models/user';
import { UserService } from 'src/api/services/user/user.service';
import { generatePassword } from 'src/api/util/password-gen';

@Controller('register')
export class RegisterController {
  constructor(private userService: UserService) {}

  @Post()
  async register(@Body() user: RegisterUserDto): Promise<UserCreatedDto> {
    const userCreated = await this.userService.create({
      email: user.email,
      password: generatePassword(32),
      role: user.role,
    });

    return userCreated;
  }
}
