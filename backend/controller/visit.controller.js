import db from "../config/db.js";

export const visit = async (req, res) => {
  const { userid, source } = req.body;

  if (!userid || !source) {
    return res.status(400).json({ message: "userId and source are required" });
  }

  try {
    await db.execute(
      `INSERT INTO profile_visits (userid, source, visitCount)
       VALUES (?, ?, 1)
       ON DUPLICATE KEY UPDATE 
         visitCount = visitCount + 1,
         source = VALUES(source)`,
      [userid, source]
    );

    res.status(200).json({ message: "Visit tracked successfully" });
  } catch (err) {
    res.status(500).json({
      message: "Error tracking visit",
      error: err.message,
    });
  }
};

export const getVisitCount = async (req, res) => {
  const { userid } = req.params;

  try {
    const [rows] = await db.execute(
      "SELECT visitCount FROM profile_visits WHERE userid = ?",
      [userid]
    );
    const count = rows[0]?.visitCount || 0;
    res.status(200).send(count.toString()); 
  } catch (err) {
    res.status(500).send("0");
  }
};
