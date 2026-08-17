import mongoose from "mongoose";

const connectDB = async()=>{
    try{

    const mongo_uri :string | undefined= process.env.MONGO_URI;

    if(!mongo_uri) return console.log("Mongo_Uri not found")
      
    await mongoose.connect(mongo_uri,{
        dbName:"typescript-prac"
    }).then(()=>console.log("Database connected successfully"))

    }
    catch(error){
    return console.log(error)

    }
}

export default connectDB;