import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { HistoryController } from './controllers/history/history.controller';
import { StatsController } from './controllers/stats/stats.controller';
import { StockController } from './controllers/stock/stock.controller';
import { RegisterController } from './controllers/register/register.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [PrismaModule],
  controllers: [
    RegisterController,
    StockController,
    StatsController,
    HistoryController,
  ],
  providers: [UserService],
})
export class ApiModule {}
