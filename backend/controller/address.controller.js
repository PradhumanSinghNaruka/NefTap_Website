// import Address from "../modal/address.modal.js";

// export const address = async (req, res) => {
//   try {
//     const { first, last, email, number, address, country, state, city, pin, card} = req.body;
//     const existingAddress = await Address.findOne({ email });
//     if (existingAddress) {
//       return res.status(400).json({ message: "Email already exist" });
//     }
//     const createdAddress = new Address({
//       first: first,
//       last: last,
//       email: email,
//       number: number,
//       address: address,
//       country: country,
//       state: state,
//       city: city,
//       pin: pin,
//       card: card,
//     });
//     await createdAddress.save();
//     res.status(201).json({
//       message: "Submitted Successfully",
//       contact: {
//         _id: createdAddress._id,
//         first: createdAddress.first,
//         last: createdAddress.last,
//         email: createdAddress.email,
//         number: createdAddress.number,
//         address: createdAddress.address,
//         country: createdAddress.country,
//         state: createdAddress.state,
//         city: createdAddress.city,
//         pin: createdAddress.pin,
//         card: createdAddress.card,
//       },
//     });
//   } catch (error) {
//     console.log("Error:" + error.message);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };


import db from "../config/db.js";
export const address = async(req, res) => {
  try{
    const { first, last, email, number, address, country, state, city, pin, card } = req.body;
    

    const [result] = await db.execute(
      "INSERT INTO addresses (first, last, email, number, address, country, state, city, pin, card) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [first, last, email, number, address, country, state, city, pin, card]
    );
    res.status(201).json({
      message: "Submitted Successfully",
      address: {
        id: result.insertId,
        first,
        last,
        email,
        number,
        address,
        country,
        state,
        city,
        pin,
        card
      },
    });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({message: "Internal Server Error"});
  }
};