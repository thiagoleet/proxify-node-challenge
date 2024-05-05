import { Controller, Get } from '@nestjs/common';

@Controller('stats')
export class StatsController {
  @Get()
  getStats() {
    return [
      { stock: 'aapl.us', times_requested: 5 },
      { stock: 'msft.us', times_requested: 2 },
    ];
  }
}
