import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import verifyRole from "../middleware/verifyRole.js";
import PostController from "../controllers/PostController.js";
const router = express.Router();

router.get("/api/posts/user", verifyToken, verifyRole(["admin", "editor"]), PostController.getUserPosts);
router.get("/api/post/:id", verifyToken, verifyRole(["admin", "editor"]), PostController.getPost);

export { router as postRoutes };
