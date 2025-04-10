import express from "express";
import { getKey, processPayment } from "../controllers/paymentController.js";
const router = express.Router();
router.route("/payment/process").post(processPayment);
router.route("/getKey").get(getKey)
export default router;