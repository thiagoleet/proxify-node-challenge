import {
  BadRequestException,
  Controller,
  Get,
  InternalServerErrorException,
  Query,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "../../auth/auth.guard";
import { StockService } from "../../services/stock/stock.service";
import { firstValueFrom } from "rxjs";
import { query } from "express";

@Controller("stock")
export class StockController {
  constructor(private readonly stockServiceService: StockService) {}

  @UseGuards(AuthGuard)
  @Get()
  async getStocks(@Query() query) {
    if (!query.q) {
      throw new BadRequestException("Query parameter 'q' is required");
    }

    try {
      const response = this.stockServiceService.getStocks(query.q);

      return response;
    } catch (error) {
      throw new InternalServerErrorException("Could not fetch stock data");
    }
  }
}
