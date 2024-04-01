import { loginRoutes } from "./routes/loginRoutes.js";
import { afterLogger, beforeLogger } from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";
import cookieParser from "cookie-parser";
import express from "express";
import mongoose from "mongoose";
const app = express();

app.use(express.json(), cookieParser(), beforeLogger, loginRoutes);

mongoose
  .connect("mongodb://localhost:27017/jwt-advanced")
  .then(() => console.log("Connected to MongoDB..."))
  .catch(() => console.log("Could not connect to MongoDB..."));

app.use(errorHandler, afterLogger);

const PORT = 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
