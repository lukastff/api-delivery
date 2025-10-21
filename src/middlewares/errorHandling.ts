import { AppError } from "@/utils/AppError";
import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export function errorHandling(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof AppError) {
    res.status(error.statusCode).json({ message: error.message });
  }

  if (error instanceof ZodError) {
    res.status(400).json({
      message: "Validation error",
      issues: error.format(),
    });
  }

  res.status(500).json({ message: error.message });
}
