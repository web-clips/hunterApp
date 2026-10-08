import express from "express";
import {
  getApplications,
  createApplication,
} from "../controllers/application.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", authMiddleware, getApplications);
router.post("/", authMiddleware, createApplication);

export default router;
