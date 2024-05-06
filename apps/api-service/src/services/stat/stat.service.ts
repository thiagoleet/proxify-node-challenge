import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { UserService } from "../user/user.service";

@Injectable()
export class StatService {
  constructor(
    private prismaService: PrismaService,
    private userService: UserService
  ) {}

  async getStats(userId: string) {
    return await this.prismaService.stat.findMany({
      where: {
        user_id: userId,
      },
    });
  }

  async updateStat(stock: string, userId: string) {
    const user = await this.userService.findById(userId);

    if (!user) {
      return null;
    }

    const stat = await this.prismaService.stat.findFirst({
      where: {
        stock,
        user_id: userId,
      },
    });

    if (!stat) {
      await this.prismaService.stat.create({
        data: {
          stock,
          user_id: userId,
          times_requested: 1,
        },
      });
    } else {
      await this.prismaService.stat.update({
        where: {
          id: stat.id,
        },
        data: {
          times_requested: stat.times_requested + 1,
        },
      });
    }

    return true;
  }
}
