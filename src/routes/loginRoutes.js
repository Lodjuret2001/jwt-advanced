import LoginController from "../controllers/LoginController.js";
import express from "express";
const router = express.Router();

router.post("/api/login", LoginController.tryLogin);

export { router as loginRoutes };