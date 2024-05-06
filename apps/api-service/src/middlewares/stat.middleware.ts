import { Injectable, NestMiddleware } from "@nestjs/common";
import { extractTokenFromHeader } from "../auth/helpers";
import { StatService } from "../services/stat/stat.service";
import { AuthService } from "../services/auth/auth.service";

@Injectable()
export class StatMiddleware implements NestMiddleware {
  constructor(
    private authService: AuthService,
    private statService: StatService
  ) {}

  async use(req: any, res: any, next: (error?: any) => void) {
    const { query } = req;
    const token = extractTokenFromHeader(req);

    if (query.q) {
      try {
        const user = await this.authService.getUserFromToken(token);
        const stock = query.q;
        await this.statService.updateStat(stock, user.id);
      } catch (error) {
        console.log("error", error);
      }
    }

    next();
  }
}
