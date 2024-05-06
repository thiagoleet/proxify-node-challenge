import { Module } from "@nestjs/common";
import { PrismaModule } from "./prisma/prisma.module";
import { HistoryController } from "./controllers/history/history.controller";
import { StatsController } from "./controllers/stats/stats.controller";
import { RegisterController } from "./controllers/register/register.controller";
import { StockController } from "./controllers/stock/stock.controller";
import { UserService } from "./services/user/user.service";
import { LoginController } from "./controllers/login/login.controller";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./auth/constants";

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "3600s" },
    }),
  ],
  controllers: [
    HistoryController,
    RegisterController,
    StatsController,
    StockController,
    LoginController,
  ],
  providers: [UserService],
})
export class ApiServiceModule {}
