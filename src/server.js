import { userRoutes } from "./routes/userRoutes.js";
import { postRoutes } from "./routes/postRoutes.js";
import { rolesRoutes } from "./routes/rolesRoutes.js";
import { afterLogger, beforeLogger } from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";
import cookieParser from "cookie-parser";
import express from "express";
import mongoose from "mongoose";
const app = express();

app.use(
  express.json(),
  cookieParser(),
  beforeLogger,
  rolesRoutes,
  userRoutes,
  postRoutes
);

mongoose
  .connect("mongodb://localhost:27017/jwt-advanced")
  .then(() => console.log("Connected to MongoDB..."))
  .catch(() => console.log("Could not connect to MongoDB..."));

app.use(errorHandler, afterLogger);

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
