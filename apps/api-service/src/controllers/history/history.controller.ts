import {
  Controller,
  Get,
  InternalServerErrorException,
  Request,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "../../auth/auth.guard";
import { AuthService } from "../../services/auth/auth.service";
import { HistoryService } from "../../services/history/history.service";
import { extractTokenFromHeader } from "../../auth/helpers";

@Controller("history")
export class HistoryController {
  constructor(
    private historyService: HistoryService,
    private authService: AuthService
  ) {}

  @UseGuards(AuthGuard)
  @Get()
  async getHistory(@Request() req) {
    try {
      const token = extractTokenFromHeader(req);
      const user = await this.authService.getUserFromToken(token);
      const response = this.historyService.getHistory(user.id);

      return response;
    } catch (error) {
      throw new InternalServerErrorException("Could not fetch stock data");
    }
  }
}
