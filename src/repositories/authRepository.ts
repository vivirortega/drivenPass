import { users } from "@prisma/client";
import prisma from "../database/database.js";

export type CreateUser = Omit<users, "id">;

export async function checkEmail(email: string) {
  const user = await prisma.users.findUnique({ where: { email } });
  return user;
}

export async function insert(userData: CreateUser) {
  await prisma.users.create({ data: userData });
}

const authRepository = { checkEmail, insert };
export default authRepository;
