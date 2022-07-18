import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "express-async-errors";

import router from "./src/router/index.js";
import errorHandler from "./src/middlewares/errorHandlerMiddleware.js";


const app = express()
app.use(express.json());
app.use(cors());
app.use(router);
app.use(errorHandler);
dotenv.config();

app.listen(process.env.PORT, () => console.log(`Server working on port ${process.env.PORT}`));