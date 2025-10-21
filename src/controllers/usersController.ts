import { Request, Response, NextFunction } from "express";
import { hash } from "bcrypt";
import { z } from "zod";

class UsersController {
  async create(req: Request, res: Response, next: NextFunction) {
    const bodySchema = z.object({
      name: z.string().trim().min(3),
      email: z.string().email(),
      password: z.string().min(6),
    });

    const { name, email, password } = bodySchema.parse(req.body);

    const hashedPassword = await hash(password, 8);

    return res.json({ message: "ok", hashedPassword });
  }
}

export { UsersController };
