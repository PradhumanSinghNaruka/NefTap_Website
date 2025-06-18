import db from "../config/db.js";
export const visit = async (req, res) => {
  const { userid, source } = req.body;

  if (!userid || !source) {
    return res.status(400).json({ message: "userId and source are required" });
  }

  try {
    await db.execute(
      "INSERT INTO publicURL (userid, source, timestamp) VALUES (?, ?, CURRENT_TIMESTAMP)",
      [userid, source]
    );
    res.status(200).json({ message: "Visit tracked" });
  } catch (err) {
    console.error("Error tracking visit:", err);
    res.status(500).json({ message: "Error tracking visit", error: err.message });
  }
};

export const getVisitCount = async (req, res) => {
  const { userid } = req.params;

  try {
    const [rows] = await db.execute(
      "SELECT COUNT(*) as total FROM publicURL WHERE userid = ?",
      [userid]
    );

    res.status(200).json({ totalVisits: rows[0].total });
  } catch (err) {
    console.error("Error fetching visit count:", err);
    res.status(500).json({ message: "Error fetching visit count", error: err.message });
  }
};
