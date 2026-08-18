import { User } from "../models/user.models.js";
import type { Request,Response } from "express";
import jwt from "jsonwebtoken"


type user ={
    email:string,
    password:string
}

const loginController = async (req:Request, res:Response)=>{

    try{

        const {email,password}:user = req.body;

        
        if(!email || !email.includes('@')) return res.status(403).json({message:"email is invalid"});

        const user= await User.findOne({email});
   
        if(!user) return res.status(404).json({message:"user not found"});

        if (password !== user.password) return res.status(401).json({message:"Invalid credentionals"});

     //tokens

        const secreate_key :string | undefined = process.env.SECREATE_KEY 

        if(!secreate_key) return console.log("internal error")
               //Accesstoken

        const access_token = jwt.sign({_id:user._id,email:user.email},secreate_key ,{expiresIn:'7d'});

      


        //refreshtoken

     //   const refresh_token = jwt.sign({_id:user._id,email:user.email},secreate_key ,{expiresIn:'1d'});

       // res.status(200).cookie("Token",refresh_token)
        
        
        return res.status(200).cookie('Token',access_token,{httpOnly:true,secure:true,sameSite:"lax"}).json({message:"Login successfull"})

        

        
    }

    catch(error){

        return res.status(500).json({message:"Internal server error"})

    }

}

export default loginController;