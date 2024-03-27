import MockDbController from "../controllers/MockDbController.js";
import express from "express";
const router = express.Router();

router.get("/api/mockdb/posts", MockDbController.getPosts);
router.get("/api/mockdb/users", MockDbController.getUsers);

export { router as mockDbRoutes };
