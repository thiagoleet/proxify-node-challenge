import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { JwtService } from "@nestjs/jwt";
import { jwtConstants } from "../../auth/constants";
import { User } from "../../models/user";

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService
  ) {}

  async login(email: string, password: string) {
    return await this.prismaService.user.findUnique({
      where: {
        email,
        password,
      },
    });
  }

  async getUserFromToken(token: string): Promise<Partial<User>> {
    const payload = await this.jwtService.verifyAsync(token, {
      secret: jwtConstants.secret,
    });

    return {
      email: payload.username,
      id: payload.user_id,
    } as Partial<User>;
  }
}
