import {
  BadRequestException,
  Controller,
  Get,
  InternalServerErrorException,
  Query,
  Request,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "../../auth/auth.guard";
import { StockService } from "../../services/stock/stock.service";
import { tap } from "rxjs";
import { HistoryService } from "../../services/history/history.service";
import { AuthService } from "../../services/auth/auth.service";
import { extractTokenFromHeader } from "../../auth/helpers";

@Controller("stock")
export class StockController {
  constructor(
    private readonly stockServiceService: StockService,
    private historyService: HistoryService,
    private authService: AuthService
  ) {}

  @UseGuards(AuthGuard)
  @Get()
  async getStocks(@Query() query, @Request() req) {
    if (!query.q) {
      throw new BadRequestException("Query parameter 'q' is required");
    }

    try {
      const response = this.stockServiceService.getStocks(query.q).pipe(
        tap(async (response) => {
          try {
            const token = extractTokenFromHeader(req);
            const user = await this.authService.getUserFromToken(token);
            this.historyService.saveHistory(response, user.id);
          } catch (error) {
            console.log("error", error);
          }
        })
      );

      return response;
    } catch (error) {
      throw new InternalServerErrorException("Could not fetch stock data");
    }
  }
}
