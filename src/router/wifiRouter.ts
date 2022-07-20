import { Router } from "express";
import schemaValidator from "../middlewares/schemaValidator.js";
import { createWifi, getWifi, deleteWifi } from "../controllers/wifiController.js";
import { tokenValidator } from "../middlewares/tokenValidator.js";
import { wifiSchema } from "../schemas/wifiSchema.js";

const wifiRouter = Router();

wifiRouter.post("/create-wifi", tokenValidator, schemaValidator(wifiSchema), createWifi);
wifiRouter.get("/wifi/:id", tokenValidator, getWifi);
wifiRouter.delete("/wifi/:id", tokenValidator, deleteWifi);

export default wifiRouter;