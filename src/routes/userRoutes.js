import express from "express";
import UserController from "../controllers/UserController.js";
const router = express.Router();

router.get("/api/users", UserController.getUsers);
router.get("/api/users/:id", UserController.getUser);

export { router as userRoutes };
