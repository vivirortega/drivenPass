import { Request, Response } from "express";
import authService from "../services/authService.js";
import { CreateUser } from "../repositories/authRepository.js";

export async function signUp(req: Request, res: Response) {
  const user: CreateUser = req.body;
  await authService.signUp(user);
  res.sendStatus(201);
}

export async function login(req: Request, res: Response) {}
