// import Card from "../modal/carddetail.modal.js";

// export const card = async (req, res) => {
//   try {
//     const { name, email, number, name2, name1 } = req.body;
//     const existingCard = await Card.findOne({ email });
//     if (existingCard) {
//       return res.status(400).json({ message: "Email already exist" });
//     }
//     const createdCard = new Card({
//       name: name,
//       email: email,
//       number: number,
//       name2: name2,
//       name1: name1,
//     });
//     await createdCard.save();
//     res.status(201).json({
//       message: "Submitted Successfully",
//       contact: {
//         _id: createdCard._id,
//         name: createdCard.name,
//         email: createdCard.email,
//         number: createdCard.number,
//         name2: createdCard.name2,
//         name1: createdCard.name1
//       },
//     });
//   } catch (error) {
//     console.log("Error:" + error.message);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };


import db from "../config/db.js";
export const card = async(req, res) => {
  try{
    const { name, email, number, name2, name1 } = req.body;
    

    const [result] = await db.execute(
      "INSERT INTO cards (name, email, number, name2, name1) VALUES (?, ?, ?, ?, ?)",
      [name, email, number, name2, name1]
    );
    res.status(201).json({
      message: "Submitted Successfully",
      card: {
        id: result.insertId,
        name,
        email,
        number,
        name2,
        name1
      },
    });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({message: "Internal Server Error"});
  }
};