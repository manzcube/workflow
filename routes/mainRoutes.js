import { Router } from "express";
import { getStatus } from "../controllers/mainControllers.js";
const router = Router();

router.route("/:id").get(getStatus);

export default router;
