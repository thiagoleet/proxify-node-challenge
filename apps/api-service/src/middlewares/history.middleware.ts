import { Request, Response, NextFunction } from "express";

export function history(req: Request, res: Response, next: NextFunction) {
  console.log(`Request...`, req);
  console.log(`Response...`, res);
  next();
}
