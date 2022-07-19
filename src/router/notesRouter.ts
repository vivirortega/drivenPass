import { Router } from "express";
import { createNote, getNote, deleteNote } from "../controllers/notesController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import { noteSchema } from "../schemas/noteSchema.js";
import { tokenValidator } from "../middlewares/tokenValidator.js";

const notesRouter = Router();

notesRouter.post("/create-note", tokenValidator, schemaValidator(noteSchema), createNote);
notesRouter.get("/notes/:id", tokenValidator, getNote);
notesRouter.delete("/notes/:id", tokenValidator, deleteNote);

export default notesRouter;