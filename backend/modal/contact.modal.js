import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true 
    },
    email: {
        type: String,
        required: true, 
        unique: true
    },
    message: {  
        type: String,
        required: true,
    } 
});

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;