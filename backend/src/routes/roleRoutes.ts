import { Router } from "express";
import { requireAuth } from "@clerk/express";
import { roleController } from "../controllers/roleController";

const router = Router();

router.get("/", roleController.getRoles);
router.post("/", requireAuth(), roleController.createRole);

export default router;