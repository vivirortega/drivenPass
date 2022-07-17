import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import router from "./src/router/index.js";


const app = express()
app.use(express.json());
app.use(cors());
app.use(router);
dotenv.config();

app.listen(process.env.PORT, () => console.log(`Server working on port ${process.env.PORT}`));