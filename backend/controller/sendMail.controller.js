// import { User } from "../model/User.js";
// import nodemailer from "nodemailer";
// import dotenv from "dotenv";
// dotenv.config();

// export const handlePrintForm = async (req, res) => {
//   const { name, email, phone, designation, company } = req.body;

//   try {
//     const user = new User({ name, email, phone, designation, company });
//     await user.save();

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "pradhumannaruka04@gmail.com",
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: "Complete Your Registration",
//       html: `<p>Click the link to complete your registration:</p>
//              <a href="http://localhost:3000/register">Register Now</a>`,
//     });

//     res.status(200).json({ message: "Saved & Email Sent" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error" });
//   }
// };
