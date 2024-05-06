import { Body, Controller, Post, UnauthorizedException } from "@nestjs/common";
import { UserService } from "../../services/user/user.service";
import { UserCreatedDto } from "../../models/user";
import { JwtService } from "@nestjs/jwt";

@Controller("login")
export class LoginController {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  @Post()
  async login(@Body() user: UserCreatedDto) {
    const userFound = await this.userService.login(user.email, user.password);

    if (!userFound) {
      throw new UnauthorizedException();
    }

    const payload = { sub: userFound.id, username: userFound.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
