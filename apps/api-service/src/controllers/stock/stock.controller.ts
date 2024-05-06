import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthGuard } from "../../auth/auth.guard";

@Controller("stock")
export class StockController {
  @UseGuards(AuthGuard)
  @Get()
  getStocks() {
    return {
      name: "APPLE",
      symbol: "AAPL.US",
      open: 123.66,
      high: 123.66,
      low: 122.49,
      close: 123,
    };
  }
}
