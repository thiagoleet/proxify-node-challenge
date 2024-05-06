import { Controller, Get, Query } from "@nestjs/common";
import { StockServiceService } from "./stock-service.service";
import { firstValueFrom } from "rxjs";

@Controller()
export class StockServiceController {
  constructor(private readonly stockServiceService: StockServiceService) {}

  @Get()
  async getStocks(@Query() query) {
    console.log("query", query);

    const response = await firstValueFrom(
      this.stockServiceService.getStocks(query.stock)
    );

    return response.data;
  }
}
