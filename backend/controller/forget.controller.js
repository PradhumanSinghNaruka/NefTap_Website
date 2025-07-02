// import db from "../config/db.js";
// export const check = async (req, res) => {
//   const { email } = req.body;
//   try {
//     const [rows] = await db.query("SELECT * FROM registers WHERE email = ?", [email]);

//     if (rows.length > 0) {
//       res.status(200).json({ exists: true });
//     } else {
//       res.status(200).json({ exists: false });
//     }
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// };
import db from "../config/db.js";

export const checkEmail = async (req, res) => {
  const { email } = req.body;

  try {
    const [rows] = await db.query(
      "SELECT * FROM registers WHERE email = ?",
      [email.trim()]
    );

    if (rows.length > 0) {
      res.status(200).json({ exists: true, message: "Email found." });
    } else {
      res.status(200).json({ exists: false, message: "Email not registered." });
    }

  } catch (err) {
    console.error("Error checking email:", err);
    console.log(err);
    console.log(message.err);
    res.status(500).json({ message: "Server error while checking email." });
  }
};
