import Register from "../modal/register.modal.js";
import bcryptjs from "bcryptjs";

export const register = async(req, res) => {
    try {
        const {name, email, password} = req.body;
        const existingRegister = await Register.findOne({email});
        if(existingRegister){
            return res.status(400).json({message: "Email already exist"});
        }
        const hashPassword = await bcryptjs.hash(password, 10);
        const createdRegister = new Register({
            name:name,
            email:email,
            password:hashPassword,
        });
        await createdRegister.save();
        res.status(201).json({
            message:"Submitted Successfully",
            contact:{
                 _id: createdRegister._id,
                name: createdRegister.name,
                email: createdRegister.email,
                password: createdRegister.password,
            },
        });
    } catch (error) {
        console.log("Error:" + error.message);
        res.status(500).json({message: "Internal Server Error"})
    }
};

export const login = async(req, res) => {
    try {
        const { email, password } = req.body;
        const register = await Register.findOne({ email });
        const isMatch = await bcryptjs.compare(password, register.password);  
        if (!register || !isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        } else {
            res.status(200).json({
                message: "Login successful",
                user: {
                    email: register.email,
                    password: register.password,
                },
            });
        }
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "First Buy a Card and Register"});
    }
};