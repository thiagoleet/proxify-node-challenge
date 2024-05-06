import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { UserService } from "../user/user.service";
import { Stock } from "../../models/stock";

@Injectable()
export class HistoryService {
  constructor(
    private prismaService: PrismaService,
    private userService: UserService
  ) {}

  async getHistory(userId: string) {
    return await this.prismaService.stockLog.findMany({
      where: {
        user_id: userId,
      },
    });
  }

  async saveHistory(stocks: Stock[], userId: string) {
    const user = await this.userService.findById(userId);

    if (!user) {
      return null;
    }

    return await this.prismaService.stockLog.createMany({
      data: stocks.map((stock) => ({
        name: stock.name,
        symbol: stock.symbol,
        open: stock.open,
        high: stock.high,
        low: stock.low,
        close: stock.close,
        user_id: userId,
      })),
    });
  }
}
