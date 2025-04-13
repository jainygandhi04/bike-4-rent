// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     otp: {
//       code: { type: String },
//       expiry: { type: Date }
//     },
    
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
    
//     role: {
//       type: Number,
//       default: 0,
//     },
//     phone: {
//       type: String,
//       required: true,
//       match: /^[6-9]\d{9}$/, // Ensure it's a valid Indian phone number
//     },
//     gender: {
//       type: String,
//       enum: ['male', 'female', 'other'],
//       required: true,
//     },
//   },
//   { timestamps: true }
// );
// export default mongoose.model("Users", userSchema);

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
    role: {
      type: Number,
      default: 0, // 0: User, 1: Admin
    },
    // phone: {
    //   type: String,
    //   required: true,
    //   match: /^[6-9]\d{9}$/, // Ensures valid Indian phone numbers
    // },
    // gender: {
    //   type: String,
    //   enum: ['male', 'female', 'other'],
    //   required: true,
    // },
    
  },
  { timestamps: true }
);

export default mongoose.model("Users", userSchema);


