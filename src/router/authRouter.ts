import { Router } from "express";
import { signUp } from "../controllers/authController.js";
import { signUpSchema } from "../schemas/authSchema.js";
import schemaValidator from "../middlewares/schemaValidator.js";

const authRouter = Router();

authRouter.post("/sign-up", schemaValidator(signUpSchema), signUp);
authRouter.post("/login");

export default authRouter;