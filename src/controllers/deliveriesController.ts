import { Request, Response, NextFunction } from "express";

class DeliveriesController {
  async create(req: Request, res: Response, next: NextFunction) {
    return res.json({ message: "Hello World" });
  }
}

export { DeliveriesController };
