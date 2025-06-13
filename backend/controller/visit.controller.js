import db from "../config/db.js";

export const visit = async (req, res) => {
  const { userid, source, timestamp } = req.body;

  try {
    await db.execute(
      "INSERT INTO publicURL (userid, source, timestamp) VALUES (?, ?, ?)",
      [userid, source, timestamp]
    );
    res.status(200).json({ message: "Visit tracked" });
  } catch (err) {
    console.error("Error tracking visit:", err);
    res.status(500).json({ message: "Error tracking visit" });
  }
};
