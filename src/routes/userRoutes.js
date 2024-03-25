import express from "express";
import UserController from "../controllers/UserController.js";
const router = express.Router();

router.get("/api/users", UserController.getUsers);
router.get("/api/users/:id", UserController.getUser);
router.get("/api/user/:username", UserController.getUsername);

export { router as userRoutes };
