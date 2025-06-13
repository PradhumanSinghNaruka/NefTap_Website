import db from "../config/db.js";

export const trackVisit = async (req, res) => {
  const { userId, source } = req.body;

  try {
    await db.execute(
      "INSERT INTO publicURL (user_id, source) VALUES (?, ?)",
      [userId, source]
    );
    res.status(200).json({ message: "Visit tracked" });
  } catch (err) {
    console.error("Error tracking visit:", err);
    res.status(500).json({ message: "Error tracking visit" });
  }
};
