// // models/Contact.js
// import mongoose from "mongoose";

// const contactSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   message: {
//     type: String,
//     required: true,
//   },
// }, { timestamps: true });

// const Contact = mongoose.model("Contact", contactSchema);
// export default Contact;

// models/contactModel.js
import mongoose from "mongoose";

const ContactMessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  adminReply: { type: String, default: '' },
  repliedAt: Date,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Contact", ContactMessageSchema);
