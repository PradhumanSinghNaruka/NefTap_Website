// import Contactus from "../modal/contactus.modal.js"; 

// export const contactus = async (req, res) => {
//     try {
//         const { name, email, number, city, message } = req.body;
//         const existingContactus = await Contactus.findOne({ email });
//         if (existingContactus) {
//             return res.status(400).json({ message: "Contact already exists" });
//         }
//         const createdContactus = new Contactus({ 
//             name: name, 
//             email: email,
//             number: number,
//             city: city,
//             message: message, 
//         });
//         await createdContactus.save();
//         res.status(201).json({
//             message: "Submit successfully",
//             contact: {
//                 _id: createdContactus._id,
//                 name: createdContactus.name,
//                 email: createdContactus.email,
//                 number: createdContactus.number,
//                 city: createdContactus.city,
//                 message: createdContactus.message
//             },
//         });
//     } catch (error) {
//         console.log("Error: " + error.message);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };

import db from "../config/db.js";  // Your MySQL connection pool or promise-based connection

export const contactus = async (req, res) => {
  try {
    const { name, email, number, city, message } = req.body;

    // Check if user already exists
    const [existingUser] = await db.execute("SELECT * FROM contactuss WHERE email = ?", [email]);
    if (existingUser.length > 0) {
      return res.status(400).json({ message: "Email already exists" }); 
    }

    // Insert new user
    const [result] = await db.execute(
      "INSERT INTO contactuss (name, email, number, city, message) VALUES (?, ?, ?)",
      [name, email, number, city, message]
    );

    res.status(201).json({
      message: "Submitted Successfully",
      contact: {
        id: result.insertId,
        name,
        email,
        number,
        city,
        message,
      },
    });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};