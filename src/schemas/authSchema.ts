import joi from "joi";
import { CreateUser } from "../repositories/authRepository.js";

export const signUpSchema = joi.object<CreateUser>({
    email: joi.string().email().required(),
    password: joi.string().min(10).required()
});