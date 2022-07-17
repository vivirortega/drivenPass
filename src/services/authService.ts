import {
  checkEmail,
  CreateUser,
  insert,
} from "../repositories/authRepository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function signUp(userData: CreateUser) {
  const { email, password } = userData;
  const userExists = await checkEmail(email);
  if (userExists) {
    throw {
      type: "unauthorized",
      message: "Email already registered",
    };
  }
  const SALT = 10;
  userData.password = await bcrypt.hash(password, SALT);
  await insert(userData);
}

async function login(userData: CreateUser) {
  const { email, password } = userData;
  const user = await checkEmail(email);

  if (!user) {
    throw {
      type: "unauthorized",
      message: "Wrong email or password",
    };
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    throw {
      type: "unauthorized",
      message: "Wrong email or password",
    };
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
  return { token };
}

const authService = { signUp, login };
export default authService;
