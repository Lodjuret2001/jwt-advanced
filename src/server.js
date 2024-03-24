import { userRoutes } from "./routes/userRoutes.js";
import { postRoutes } from "./routes/postRoutes.js";
import express from "express";
const app = express();

app.use(express.json(), userRoutes, postRoutes);

const PORT = 3000;
app.listen(PORT, console.log(`Listening on port ${PORT}...`));
