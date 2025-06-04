import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    first:{
        type:String,
        required:true,
    },
    last:{
        type:String,
        required: true, 
    },
    email:{
        type:String,
        required:true,
        unique:true, 
    },
    number:{
        type: Number,
        required: true,
    },
    address:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required: true,
    },
    state:{
        type:String,
        required: true,
    },
    city:{
        type:String,
        required: true,
    },
    pin:{
        type:Number,
        required:true,
    },
    card:{
        type:String,
        required: true,
    }
});
const Address = mongoose.model("Address",addressSchema);
export default Address;