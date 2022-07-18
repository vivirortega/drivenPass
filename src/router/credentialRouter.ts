import { Router } from "express";
import { createCredential, getCredential } from "../controllers/credentialController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import { credentialSchema } from "../schemas/credentialSchema.js";
import { tokenValidator } from "../middlewares/tokenValidator.js";

const credentialRouter = Router();

credentialRouter.post("/create-credential", tokenValidator, schemaValidator(credentialSchema), createCredential);
credentialRouter.get("/credentials/:id", tokenValidator, getCredential);

export default credentialRouter;