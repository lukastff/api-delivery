import { Request, Response, NextFunction } from "express";
import { prisma } from "@/database/prisma";
import { compare } from "bcrypt";
import { z } from "zod";
import { AppError } from "@/utils/AppError";
import { authConfig } from "@/configs/auth";
import { sign } from "jsonwebtoken";

class SessionsController {
  async create(req: Request, res: Response, next: NextFunction) {
    const bodySchema = z.object({
      email: z.string().email(),
      password: z.string(),
    });

    const { email, password } = bodySchema.parse(req.body);

    const user = await prisma.user.findFirst({ where: { email } });

    if (!user) {
      throw new AppError("Email or Password incorrect", 401);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email or Password incorrect", 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({ role: user.role ?? "customer" }, secret, {
      subject: user.id,
      expiresIn,
    });

    const { password: hashedPassword, ...userWithoutPassword } = user;

    return res.json({ token, user: userWithoutPassword });
  }
}

export { SessionsController };
