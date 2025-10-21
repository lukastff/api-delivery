import { Request, Response, NextFunction } from "express";
import { prisma } from "../database/prisma";
import { z } from "zod";

class DeliveriesController {
  async create(req: Request, res: Response, next: NextFunction) {
    const bodySchema = z.object({
      user_id: z.string().uuid(),
      description: z.string(),
    });

    const { user_id, description } = bodySchema.parse(req.body);

    await prisma.delivery.create({
      data: {
        userId: user_id,
        description,
      },
    });

    return res.status(201).json();
  }
}

export { DeliveriesController };
