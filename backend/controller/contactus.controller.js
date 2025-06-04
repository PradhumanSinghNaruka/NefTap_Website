import Contactus from "../modal/contactus.modal.js"; 

export const contactus = async (req, res) => {
    try {
        const { name, email, number, city, message } = req.body;
        const existingContactus = await Contactus.findOne({ email });
        if (existingContactus) {
            return res.status(400).json({ message: "Contact already exists" });
        }
        const createdContactus = new Contactus({ 
            name: name, 
            email: email,
            number: number,
            city: city,
            message: message, 
        });
        await createdContactus.save();
        res.status(201).json({
            message: "Submit successfully",
            contact: {
                _id: createdContactus._id,
                name: createdContactus.name,
                email: createdContactus.email,
                number: createdContactus.number,
                city: createdContactus.city,
                message: createdContactus.message
            },
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};