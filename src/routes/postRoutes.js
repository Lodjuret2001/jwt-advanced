import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import PostController from "../controllers/PostController.js";
const router = express.Router();

router.get("/api/posts", verifyToken, PostController.getPosts);
router.get("/api/posts/:id", verifyToken, PostController.getPost);

export { router as postRoutes };
