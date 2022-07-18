import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export async function tokenValidator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "").trim();
  const secretKey = process.env.JWT_SECRET;
  const user = jwt.verify(token, secretKey);

  if (!user) {
    throw {
      type: "not_found",
      message: "User not found",
    };
  }

  if (!token) {
    throw {
      type: "unauthorized",
      message: "No token",
    };
  }

  res.locals.user = user;
  next();
}
