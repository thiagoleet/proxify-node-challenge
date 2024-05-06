import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { PrismaModule } from "./prisma/prisma.module";
import { HistoryController } from "./controllers/history/history.controller";
import { StatsController } from "./controllers/stats/stats.controller";
import { RegisterController } from "./controllers/register/register.controller";
import { StockController } from "./controllers/stock/stock.controller";
import { UserService } from "./services/user/user.service";
import { LoginController } from "./controllers/login/login.controller";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./auth/constants";
import { StockService } from "./services/stock/stock.service";
import { HttpModule } from "@nestjs/axios";

import { StatService } from "./services/stat/stat.service";
import { StatMiddleware } from "./middlewares/stat.middleware";
import { AuthService } from './services/auth/auth.service';

@Module({
  imports: [
    PrismaModule,
    HttpModule,
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
  providers: [UserService, StockService, StatService, AuthService],
})
export class ApiServiceModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(StatMiddleware).forRoutes(StockController);
  }
}
