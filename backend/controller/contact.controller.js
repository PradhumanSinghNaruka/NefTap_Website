import Contact from "../modal/contact.modal.js"; 

export const contact = async (req, res) => {
    try {
        const { number, email, message } = req.body;
        const existingContact = await Contact.findOne({ email });
        if (existingContact) {
            return res.status(400).json({ message: "Contact already exists" });
        }
        const createdContact = new Contact({ 
            number: number,
            email: email,
            message: message, 
        });
        await createdContact.save();
        res.status(201).json({
            message: "Submit successfully",
            contact: {
                _id: createdContact._id,
                number: createdContact.number,
                email: createdContact.email,
                message: createdContact.message
            },
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};