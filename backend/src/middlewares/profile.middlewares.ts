
import type {Request,Response} from "express"
import jwt from "jsonwebtoken";




const middleware = async(req:Request,res : Response,next:any)=>{

    try{

     const access_token = req.cookies?.Token;

     if(!access_token) return res.status(403).json({message:"User unauthorized"});

      const secreate_key :string | undefined = process.env.SECREATE_KEY 

        if(!secreate_key) return console.log("internal error")

     const decode:any = jwt.verify(access_token,secreate_key);

     if(!decode) return res.status(409). json({message:"please re-login"})

      req.user = decode._id;

      next();



    }

    catch(error){

        return res.status(500).json({message:"token verification failed"})

    }

}

export default middleware;