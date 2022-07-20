import joi from "joi";
import { WifiService } from "../types/genericTypes.js";

export const wifiSchema = joi.object<WifiService>({
  title: joi.string().required(),
  password: joi.string().required(),
});
