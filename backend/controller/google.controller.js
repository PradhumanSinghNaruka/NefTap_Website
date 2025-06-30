import db from "../config/db.js";
export const google = async(req, res) => {
  try{
    const { name, email, number, link } = req.body;
    

    const [result] = await db.execute(
      "INSERT INTO googles (name, email, number, link) VALUES (?, ?, ?, ?)",
      [name, email, number, link]
    );
    res.status(201).json({
      message: "Submitted Successfully",
      google: {
        id: result.insertId,
        name,
        email,
        number,
        link
      },
    });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({message: "Internal Server Error"});
  }
};