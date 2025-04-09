// routes/reviewRoutes.js
import express from "express";
import { addReview, getAllReviews } from "../controllers/reviewController.js";

const router = express.Router();

router.post("/add", addReview);
router.get("/all", getAllReviews);

export default router;
