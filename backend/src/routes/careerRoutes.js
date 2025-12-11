import express from "express";
import {
  getCareers,
  createCareer,
  deleteCareer
} from "../controllers/careerController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getCareers);
router.post("/", protect, createCareer);
router.delete("/:id", protect, deleteCareer);

export default router;
