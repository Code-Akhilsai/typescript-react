import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   
    username:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
        lowercase:true,
    },

    password:{
        type:String,
        required:true,
        minlength:[8,"atleast 8 characters"]

    }


},{timestamps:true});


export const User = mongoose.model("User",userSchema)