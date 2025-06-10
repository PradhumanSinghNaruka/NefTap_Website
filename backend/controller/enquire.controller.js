// import Enquire from "../modal/enquire.modal.js"; 

// export const enquire = async (req, res) => {
//     try {
//         const { name, email, number, cards, city, message } = req.body;
//         const existingEnquire = await Enquire.findOne({ email });
//         if (existingEnquire) {
//             return res.status(400).json({ message: "Contact already exists" });
//         }
//         const createdEnquire = new Enquire({ 
//             name: name, 
//             email: email,
//             number: number,
//             cards: cards, 
//             city: city,
//             message: message, 
//         });
//         await createdEnquire.save();
//         res.status(201).json({
//             message: "Submit successfully",
//             contact: {
//                 _id: createdEnquire._id,
//                 name: createdEnquire.name,
//                 email: createdEnquire.email,
//                 number: createdEnquire.number,
//                 cards: createdEnquire.cards,
//                 city: createdEnquire.city,
//                 message: createdEnquire.message
//             },
//         });
//     } catch (error) {
//         console.log("Error: " + error.message);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };


import db from "../config/db.js";
export const enquire = async(req, res) => {
    try{
        const { name, email, number, cards, city, message } = req.body;
        const [existingEnquire] = await db.execute("SELECT * FROM enquires WHERE email = ?", [email]);
        if(existingEnquire.length > 0){
            return res.status(400).json({ message: "Email already exists"});
        }

        const [result] = await db.execute(
            "INSERT INTO enquires (name, email, number, cards, city, message) VALUES (?, ?, ?, ?, ?, ?)",
            [name, email, number, cards, city, message]
        );
        res.status(201).json({
            message: "Submitted Successfully",
            enquire: {
                id: result.insertId,
                name,
                email,
                number,
                cards,
                city,
                message
            },
        });
    } catch (error) {
        console.log("Error :" + error.message);
        res.status(500).json({ message: "Internal Server Error"});
    }
};