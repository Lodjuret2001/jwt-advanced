import LoginController from "../controllers/LoginController.js";
import express from "express";
const router = express.Router();

router.post("/api/login", LoginController.logIn);
router.delete("/api/logout", LoginController.logOut);

export { router as loginRoutes };