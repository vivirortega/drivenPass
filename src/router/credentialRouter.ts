import { Router } from "express";
import { createCredential } from "../controllers/credentialController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import { credentialSchema } from "../schemas/credentialSchema.js";
import { tokenValidator } from "../middlewares/tokenValidator.js";

const credentialRouter = Router();

credentialRouter.post("/create-credential", tokenValidator, schemaValidator(credentialSchema), createCredential);

export default credentialRouter;