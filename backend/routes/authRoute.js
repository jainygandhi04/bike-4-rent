import express from "express";
import {
  AllUsersController,
  forgotPasswordController,
  loginController,
  registerController,
  userProfileController,
  verifyOtpController,
  resetPasswordController,
  editUserController,
  updateLicenseDetails,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { sendOtpController } from "../controllers/authController.js";//new change
import formidable from "express-formidable";


//  router object
const router = express.Router();

// routing
// REGISTER '' METHOD POST
router.post("/register", registerController);

// LOGIN '' METHOD POST
router.post("/login", loginController);

// USERlOGGEDIN STATUS '' METHOD GET
router.get("/me", requireSignIn, userProfileController);

//ADMINLOGIN METHOD GET
//outer.get("/adminLogin",(req,res)=>{
//res.render("Login");
//});

// Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

//Send Otp
router.post("/send-otp", sendOtpController);

// Update license details
router.post("/update-license",formidable(), updateLicenseDetails); // new API route

//verify otp
router.post("/verify-otp", verifyOtpController);

//reset password
router.post("/reset-Password",resetPasswordController )

router.put("/edit-user",editUserController)

// Get '' METHOD GET
router.get("/getallusers", requireSignIn, isAdmin, AllUsersController);

// Protected Route Auth for User Dashboard
// router.get("/user-auth", requireSignIn, (req, res) => {
//   res.status(200).send({ ok: true });
// });

// Protected Route Auth for Admin Dashboard
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
