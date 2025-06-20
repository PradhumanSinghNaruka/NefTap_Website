// visit.controller.js
import db from "../config/db.js";
exports.incrementVisit = async (req, res) => {
  const { userid } = req.params;

  try {
    const [rows] = await db.query('SELECT visit_count FROM profile_visits WHERE userid = ?', [userid]);

    if (rows.length > 0) {
      await db.query('UPDATE profile_visits SET visit_count = visit_count + 1 WHERE userid = ?', [userid]);
    } else {
      await db.query('INSERT INTO profile_visits (userid, visit_count) VALUES (?, 1)', [userid]);
    }

    res.status(200).json({ message: 'Visit count updated successfully' });
  } catch (err) {
    console.error('Error updating visit count:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getVisitCount = async (req, res) => {
  const { userid } = req.params;

  try {
    const [rows] = await db.query('SELECT visit_count FROM profile_visits WHERE userid = ?', [userid]);

    if (rows.length > 0) {
      res.status(200).json({ visitCount: rows[0].visit_count });
    } else {
      res.status(200).json({ visitCount: 0 });
    }
  } catch (err) {
    console.error('Error fetching visit count:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
