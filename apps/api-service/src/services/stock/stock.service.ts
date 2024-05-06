import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { StockResponse } from "../../models/stock";
import { map } from "rxjs";

@Injectable()
export class StockService {
  constructor(private readonly httpService: HttpService) {}

  getStocks(stock: string) {
    const url = "http://localhost:3002";
    const response$ = this.httpService
      .get<StockResponse>(url, {
        params: {
          stock,
        },
      })
      .pipe(map((response) => response.data.symbols));

    return response$;
  }
}
