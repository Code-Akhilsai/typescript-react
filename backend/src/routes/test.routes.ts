import {Router} from "express";


type User_details = {
    Name:string,
    age:number
}
const router = Router();

router.post("/test",(req,res)=>{

    const {Name, age}:User_details=req.body;

    return res.status(200).json({Name,age})
    
    
});


export default router;



