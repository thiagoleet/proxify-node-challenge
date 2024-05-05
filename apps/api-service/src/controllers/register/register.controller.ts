import { Controller, Post, Body } from "@nestjs/common";
import { UserService } from "../../services/user/user.service";
import { RegisterUserDto, UserCreatedDto } from "../../models/user";
import { generatePassword } from "../../util/password-gen";

@Controller("register")
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
