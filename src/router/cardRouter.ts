import { Router } from "express";
import { createCard } from "../controllers/cardsController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import { cardSchema } from "../schemas/cardSchema.js";
import { tokenValidator } from "../middlewares/tokenValidator.js";


const cardRouter = Router();

cardRouter.post("/create-card", tokenValidator, schemaValidator(cardSchema), createCard);
cardRouter.get("/cards/:id", schemaValidator);

export default cardRouter;