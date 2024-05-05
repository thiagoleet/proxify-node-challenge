import { Module } from "@nestjs/common";
import { ApiServiceModule } from "apps/api-service/src/api-service.module";
import { StockServiceModule } from "apps/stock-service/src/stock-service.module";

@Module({
  imports: [ApiServiceModule, StockServiceModule],
  controllers: [],
  providers: [],
})
export class ApiGatewayModule {}
