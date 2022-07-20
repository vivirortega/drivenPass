import { Router } from "express";
import { createCard, getCard, deleteCard } from "../controllers/cardsController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import { cardSchema } from "../schemas/cardSchema.js";
import { tokenValidator } from "../middlewares/tokenValidator.js";


const cardRouter = Router();

cardRouter.post("/create-card", tokenValidator, schemaValidator(cardSchema), createCard);
cardRouter.get("/cards/:id", tokenValidator, getCard);
cardRouter.delete("/cards/:id", tokenValidator, deleteCard);

export default cardRouter;