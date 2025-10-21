import { Request, Response, NextFunction } from "express";

class SessionsController {
  async create(req: Request, res: Response, next: NextFunction) {
    return res.json({ message: "Hello World" });
  }
}

export { SessionsController };
