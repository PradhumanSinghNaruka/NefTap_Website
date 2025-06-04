import Enquire from "../modal/enquire.modal.js"; 

export const enquire = async (req, res) => {
    try {
        const { name, email, number, cards, city, message } = req.body;
        const existingEnquire = await Enquire.findOne({ email });
        if (existingEnquire) {
            return res.status(400).json({ message: "Contact already exists" });
        }
        const createdEnquire = new Enquire({ 
            name: name, 
            email: email,
            number: number,
            cards: cards, 
            city: city,
            message: message, 
        });
        await createdEnquire.save();
        res.status(201).json({
            message: "Submit successfully",
            contact: {
                _id: createdEnquire._id,
                name: createdEnquire.name,
                email: createdEnquire.email,
                number: createdEnquire.number,
                cards: createdEnquire.cards,
                city: createdEnquire.city,
                message: createdEnquire.message
            },
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};