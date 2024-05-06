import { Body, Controller, Post, UnauthorizedException } from "@nestjs/common";
import { UserCreatedDto } from "../../models/user";
import { JwtService } from "@nestjs/jwt";
import { AuthService } from "../../services/auth/auth.service";

@Controller("login")
export class LoginController {
  constructor(
    private service: AuthService,
    private jwtService: JwtService
  ) {}

  @Post()
  async login(@Body() user: UserCreatedDto) {
    const userFound = await this.service.login(user.email, user.password);

    if (!userFound) {
      throw new UnauthorizedException();
    }

    const payload = { user_id: userFound.id, username: userFound.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
