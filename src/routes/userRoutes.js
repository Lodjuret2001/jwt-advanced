import express from "express";
import UserController from "../controllers/UserController.js";
import verifyToken from "../middleware/verifyToken.js";
import verifyRole from "../middleware/verifyRole.js";
const router = express.Router();

router.get("/api/user/:id", verifyToken, verifyRole(["admin"]), UserController.getUser);

export { router as userRoutes };
