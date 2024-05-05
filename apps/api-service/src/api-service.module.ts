import { Module } from "@nestjs/common";
import { PrismaModule } from "./prisma/prisma.module";
import { HistoryController } from "./controllers/history/history.controller";
import { StatsController } from "./controllers/stats/stats.controller";
import { RegisterController } from "./controllers/register/register.controller";
import { StockController } from "./controllers/stock/stock.controller";
import { UserService } from "./services/user/user.service";

@Module({
  imports: [PrismaModule],
  controllers: [
    HistoryController,
    RegisterController,
    StatsController,
    StockController,
  ],
  providers: [UserService],
})
export class ApiServiceModule {}
