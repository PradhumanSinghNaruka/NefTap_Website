// 


import db from "../config/db.js";
import bcrypt from "bcrypt"; 

export const updatePassword = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }
    const [rows] = await db.execute("SELECT * FROM registers WHERE email = ?", [email]);

    if (rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.execute("UPDATE registers SET password = ? WHERE email = ?", [hashedPassword, email]);

    return res.json({ message: "Password updated successfully" });

  } catch (err) {
    console.error("Update error:", err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

export default updatePassword;
