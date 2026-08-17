import {User} from "../models/user.models.js";
import type{Request,Response} from "express"

type user={
    username:string,
    email:string,
    password:string
}
const registerController = async(req : Request,res : Response)=>{
    try{
        const {username,email, password} : user=req.body;

        if(!email || !email.includes('@')) return res.status(403).json({message:"email is invalid"});

        const user:string | null = await User.findOne({email});

       

        if(user) return res.status(403).json({message:"user already exists"})
        
        
            await User.create({username,email,password});


            return res.status(201).json({message:"User created successfully"})
        

    }

    catch(error){

        return res.status(500).json({message:"User failed to register"})

    }

}

export default registerController;