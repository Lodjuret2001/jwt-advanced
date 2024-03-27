import express from "express";
import UserController from "../controllers/UserController.js";
const router = express.Router();

router.get("/api/user/:id", UserController.getUser);

export { router as userRoutes };
