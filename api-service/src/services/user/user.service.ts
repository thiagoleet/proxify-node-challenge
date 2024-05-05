import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserCreatedDto } from 'src/models/user';
import { PrismaService } from 'src/prisma/prisma.service';

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
}
