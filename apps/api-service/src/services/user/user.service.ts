import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { User, UserCreatedDto } from "../../models/user";

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async create(user: Partial<User>) {
    const userCreated = await this.prismaService.user.create({
      data: {
        email: user.email,
        password: user.password,
        role: user.role,
      },
    });

    return {
      email: userCreated.email,
      password: userCreated.password,
    } as UserCreatedDto;
  }

  async findById(id: string) {
    return await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });
  }
}
