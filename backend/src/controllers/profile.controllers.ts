import {User} from "../models/user.models.js";
import type{Request,Response} from "express"


const registerController = async(req : Request,res : Response)=>{
    try{
        const {_id,email}:any = req.user;


       const user =  await User.findOne({_id,email});

       return res.status(200).json({message:"profile page",user})
        

    }

    catch(error){

        return res.status(500).json({message:"please re-login"})

    }

}

export default registerController;