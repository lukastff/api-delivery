import { Request, Response, NextFunction } from "express";

class UsersController {
  create(req: Request, res: Response, next: NextFunction) {
    return res.json({ message: "ok" });
  }
}

export { UsersController };
