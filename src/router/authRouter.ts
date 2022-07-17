import { Router } from "express";
import { signUp, login } from "../controllers/authController.js"
import { signUpSchema, loginSchema } from "../schemas/authSchema.js";
import schemaValidator from "../middlewares/schemaValidator.js";

const authRouter = Router();

authRouter.post("/sign-up", schemaValidator(signUpSchema), signUp);
authRouter.post("/login", schemaValidator(loginSchema), login);

export default authRouter;