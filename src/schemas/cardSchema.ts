import joi from "joi";
import { CardService } from "../types/genericTypes.js";

export const cardSchema = joi.object<CardService>({
  number: joi.string().length(16).required(),
  name: joi.string().required(),
  exp_date: joi.string().required(),
  cvc: joi.string().length(3).required(),
  password: joi.string().required(),
  is_virtual: joi.boolean().required(),
  type: joi.string().valid("credit", "debit", "credit_debit").required(),
});
