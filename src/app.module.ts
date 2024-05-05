import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RegisterController } from './controllers/register/register.controller';
import { StockController } from './controllers/stock/stock.controller';
import { StatsController } from './controllers/stats/stats.controller';
import { HistoryController } from './controllers/history/history.controller';

@Module({
  imports: [PrismaModule],
  controllers: [
    AppController,
    RegisterController,
    StockController,
    StatsController,
    HistoryController,
  ],
  providers: [AppService],
})
export class AppModule {}
