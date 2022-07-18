import joi from "joi";
import { CredentialData } from "../repositories/credentialsRepository.js";

export const credentialSchema = joi.object<CredentialData>({
  title: joi.string().required(),
  url: joi.string().uri().required(),
  user: joi.string().required(),
  password: joi.string().required(),
});
