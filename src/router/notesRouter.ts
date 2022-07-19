import { Router } from "express";
import { createNote } from "../controllers/notesController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import { noteSchema } from "../schemas/noteSchema.js";
import { tokenValidator } from "../middlewares/tokenValidator.js";

const notesRouter = Router();

notesRouter.post("/create-note", tokenValidator, schemaValidator(noteSchema), createNote);
notesRouter.get("/notes/:id");

export default notesRouter;