import express from "express";
import UserController from "../controllers/UserController.js";
import verifyToken from "../middleware/verifyToken.js";
const router = express.Router();

router.get("/api/user/:id", verifyToken, UserController.getUser);

export { router as userRoutes };
