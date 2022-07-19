import joi from "joi";
import { NoteService } from "../types/genericTypes.js";

export const noteSchema = joi.object<NoteService>({
  title: joi.string().required().max(50),
  content: joi.string().required().max(1000),
});
