import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { prisma } from "@/database/prisma";

class DeliveryLogsController {
  async create(req: Request, res: Response, next: NextFunction) {
    return res.json({ message: "ok" });
  }
}

export { DeliveryLogsController };
