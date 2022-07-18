import joi from "joi";
import { CredentialUserId } from "../types/credentialTypes.js";

export const credentialSchema = joi.object<CredentialUserId>({
  title: joi.string().required(),
  url: joi.string().uri().required(),
  password: joi.string().required(),
});
