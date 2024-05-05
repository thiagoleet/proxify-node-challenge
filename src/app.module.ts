import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { StockModule } from './stock/stock.module';

@Module({
  imports: [ApiModule, StockModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
