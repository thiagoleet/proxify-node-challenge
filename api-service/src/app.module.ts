import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { RegisterController } from './controllers/register/register.controller';
import { StockController } from './controllers/stock/stock.controller';
import { StatsController } from './controllers/stats/stats.controller';
import { UserService } from './services/user/user.service';
import { HistoryController } from './controllers/history/history.controller';

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
export class AppModule {}
