import { userRoutes } from "./routes/userRoutes.js";
import { postRoutes } from "./routes/postRoutes.js";
import { loginRoutes } from "./routes/loginRoutes.js";
import { afterLogger, beforeLogger } from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";
import express from "express";
const app = express();

app.use(express.json(), beforeLogger, userRoutes, postRoutes, loginRoutes);

app.use(errorHandler, afterLogger);

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
