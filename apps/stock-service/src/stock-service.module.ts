import { Module } from "@nestjs/common";
import { StockServiceController } from "./stock-service.controller";
import { StockServiceService } from "./stock-service.service";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [HttpModule],
  controllers: [StockServiceController],
  providers: [StockServiceService],
})
export class StockServiceModule {}
