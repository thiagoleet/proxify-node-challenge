import { Controller, Get } from '@nestjs/common';

@Controller('history')
export class HistoryController {
  @Get()
  getHistory() {
    return [
      {
        date: '2021-04-01T19:20:30Z',
        name: 'APPLE',
        symbol: 'AAPL.US',
        open: '123.66',
        high: 123.66,
        low: 122.49,
        close: '123',
      },
      {
        date: '2021-03-25T11:10:55Z',
        name: 'APPLE',
        symbol: 'AAPL.US',
        open: '121.10',
        high: 123.66,
        low: 122,
        close: '122',
      },
    ];
  }
}
