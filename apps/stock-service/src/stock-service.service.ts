import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { firstValueFrom } from "rxjs";

@Injectable()
export class StockServiceService {
  constructor(private readonly httpService: HttpService) {}

  getHello(): string {
    return "Hello World!";
  }

  getStocks(stockCode: string) {
    const url = "https://stooq.com/q/l/";
    const response$ = this.httpService.get(url, {
      params: {
        s: stockCode,
        f: "sd2t2ohlcvn",
        e: "json",
      },
    });

    return response$;
  }
}
