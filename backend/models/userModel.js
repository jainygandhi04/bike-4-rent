import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    otp: {
      code: { type: String },
      expiry: { type: Date }
    },
    
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Users", userSchema);
