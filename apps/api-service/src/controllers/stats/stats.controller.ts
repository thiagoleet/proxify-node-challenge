import { Controller, Get, Request, UseGuards } from "@nestjs/common";
import { StatService } from "../../services/stat/stat.service";
import { AuthGuard } from "../../auth/auth.guard";
import { extractTokenFromHeader } from "../../auth/helpers";
import { AuthService } from "../../services/auth/auth.service";
import { from, map } from "rxjs";

@Controller("stats")
export class StatsController {
  constructor(
    private statService: StatService,
    private authService: AuthService
  ) {}

  @UseGuards(AuthGuard)
  @Get()
  async getStats(@Request() req) {
    const token = extractTokenFromHeader(req);
    const user = await this.authService.getUserFromToken(token);

    return from(this.statService.getStats(user.id)).pipe(
      map((stats) =>
        stats.map((stat) => ({
          stock: stat.stock,
          timesRequested: stat.times_requested,
        }))
      )
    );
  }
}
