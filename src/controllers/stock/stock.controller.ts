import { Controller, Get } from '@nestjs/common';

@Controller('stock')
export class StockController {
  @Get()
  getStocks() {
    return {
      name: 'APPLE',
      symbol: 'AAPL.US',
      open: 123.66,
      high: 123.66,
      low: 122.49,
      close: 123,
    };
  }
}
