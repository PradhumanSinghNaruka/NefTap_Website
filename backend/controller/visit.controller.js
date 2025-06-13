export const visit = async (req, res) => {
  const { userId, source } = req.body;

  if (!userId || !source) {
    return res.status(400).json({ message: "userId and source are required" });
  }

  try {
    // Use CURRENT_TIMESTAMP in SQL instead of passing new Date() from JS
    await db.execute(
      "INSERT INTO publicURL (userid, source, timestamp) VALUES (?, ?, CURRENT_TIMESTAMP)",
      [userId, source]
    );
    res.status(200).json({ message: "Visit tracked" });
  } catch (err) {
    console.error("Error tracking visit:", err);
    res.status(500).json({ message: "Error tracking visit", error: err.message });
  }
};
