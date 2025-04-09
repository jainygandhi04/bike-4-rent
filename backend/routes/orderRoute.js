/*import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  AllOrdersController,
  getOrdersController,
  makeOrderController,
  updateStatusController,
} from "../controllers/orderController.js";
const router = express.Router();

router.post("/make-order", requireSignIn, makeOrderController);

// orders of particular user in customer your order's section
router.get("/orders", requireSignIn, getOrdersController);

// orders of users in admin dashboard
router.get("/allorders", requireSignIn, isAdmin, AllOrdersController);

// order status update by admin
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  updateStatusController
);
export default router;*/


import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  AllOrdersController,
  getOrdersController,
  makeOrderController,
  updateStatusController,
  razorpaySuccessController, 
} from "../controllers/orderController.js";

import BikeOrder from "../models/orderModel.js"; // 🔸 Ensure this import exists

const router = express.Router();

// 📦 Place Order
router.post("/make-order", requireSignIn, makeOrderController);

// 📄 Get user-specific orders
router.get("/orders", requireSignIn, getOrdersController);

// 📊 Get all orders (admin)
router.get("/allorders", requireSignIn, isAdmin, AllOrdersController);

// ✅ Admin manually updates order status
router.put("/order-status/:orderId", requireSignIn, isAdmin, updateStatusController);
// Razorpay payment success route
router.post("/razorpay-success", razorpaySuccessController);


// 🧾 Razorpay: User update after successful payment
router.put("/update-status/:orderId", async (req, res) => {
  const { status, paymentId } = req.body;

  try {
    const updatedOrder = await BikeOrder.findByIdAndUpdate(
      req.params.orderId,
      { status, paymentId },
      { new: true }
    );
    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: "Error updating order", error });
  }
});
export default router;


