import express from "express";
import PostController from "../controllers/PostController.js";
const router = express.Router();

router.get("/api/posts", PostController.getPosts);
router.get("/api/posts/:id", PostController.getPost);

export { router as postRoutes };
