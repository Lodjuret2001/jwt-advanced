import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import PostController from "../controllers/PostController.js";
const router = express.Router();

router.get("/api/posts/user", verifyToken, PostController.getUserPosts);
router.get("/api/post/:id", verifyToken, PostController.getPost);

export { router as postRoutes };
