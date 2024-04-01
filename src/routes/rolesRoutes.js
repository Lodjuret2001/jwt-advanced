import express from "express";
import RolesController from "../controllers/RolesController.js";
import verifyRole from "../middleware/verifyRole.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.get(
  "/api/roles/admin",
  verifyToken,
  verifyRole(["admin"]),
  RolesController.tryAdmin
);
router.get(
  "/api/roles/editor",
  verifyToken,
  verifyRole(["editor"]),
  RolesController.tryEditor
);
router.get(
  "/api/roles/viewer",
  verifyToken,
  verifyRole(["viewer"]),
  RolesController.tryViewer
);

export { router as rolesRoutes };
