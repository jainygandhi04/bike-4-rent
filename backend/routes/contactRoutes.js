// import express from "express";
// import Contact from "../models/contactModel.js";
// import nodemailer from "nodemailer";

// const router = express.Router();

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "jainygandhi8@gmail.com", // your Gmail
//     pass: "tvyj lrov ipgu djjp", // Gmail app password
//   },
// });

// router.post("/", async (req, res) => {
//   try {
//     const { firstname, lastname, email, message } = req.body;

//     // Save to DB
//     const newContact = new Contact({
//       name: `${firstname} ${lastname}`,
//       email,
//       message,
//     });

//     await newContact.save();

//     // Send mail to admin
//     const mailOptions = {
//       from: `"${firstname} ${lastname}" <${email}>`, // shows user's name and email
//       to: "jainygandhi8@gmail.com", // your (admin's) email
//       replyTo: email, // this is important so replies go to user
//       subject: "New Inquiry",
//       html: `
//         <h3>New Contact Request</h3>
//         <p><strong>Name:</strong> ${firstname} ${lastname}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong><br/>${message}</p>
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     res.status(201).json({ message: "Message sent successfully!" });

//     // Auto-reply to user
// await transporter.sendMail({
//     from: `"Bike-4-Rent App" <${process.env.MAIL_USER}>`,

//     to: email, // user’s email from req.body
//     subject: "Thanks for contacting us",
//       text: `Dear ${firstName},\n\nThank you for reaching out! We’ll get back to you shortly.\n\nRegards,\nTeam BikeForRent`,
//   });
  
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({ message: "Failed to send contact message", error });
//   }
// });

// export default router;

// routes/contactRoutes.js
import express from "express";
import Contact from "../models/contactModel.js";
import nodemailer from "nodemailer";

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "djmgroup23@gmail.com",
    pass: "bxbj futd tcbx osow",
  },
});

// 🌟 POST: User contacts
router.post("/", async (req, res) => {
  try {
    const { firstname, lastname, email, message } = req.body;

    const newContact = new Contact({
      name: `${firstname} ${lastname}`,
      email,
      message,
    });

    await newContact.save();

    // Notify admin
    await transporter.sendMail({
      from: `"${firstname} ${lastname}" <${email}>`,
      to: "djmgroup23@gmail.com",
      replyTo: email,
      subject: "New Inquiry",
      html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    // Auto-reply to user
    await transporter.sendMail({
      from: `"Bike-4-Rent App" <djmgroup23@gmail.com>`,
      to: email,
      subject: "Thanks for contacting us",
      text: `Dear ${firstname},\n\nThank you for reaching out! We’ll get back to you shortly.\n\nRegards,\nTeam BikeForRent`,
    });

    res.status(201).json({ message: "Message sent successfully!" });

  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send contact message", error });
  }
});


// 🌟 GET: Admin fetch all messages
router.get("/admin/messages", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch messages", error });
  }
});


// 🌟 POST: Admin replies to a message
router.post("/admin/reply/:id", async (req, res) => {
  try {
    const { reply } = req.body;
    const messageDoc = await Contact.findById(req.params.id);

    if (!messageDoc) {
      return res.status(404).json({ message: "Message not found" });
    }

    messageDoc.adminReply = reply;
    messageDoc.repliedAt = new Date();
    await messageDoc.save();

    // Send reply to user
    await transporter.sendMail({
      from: `"Bike-4-Rent Support" <djmgroup23@gmail.com>`,
      to: messageDoc.email,
      subject: "Reply to your inquiry",
      text: `Hi ${messageDoc.name},\n\n${reply}\n\nRegards,\nTeam BikeForRent`,
    });

    res.json({ message: "Reply sent and saved." });

  } catch (error) {
    res.status(500).json({ message: "Failed to reply", error });
  }
});

export default router;
