import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import connectDB from "./db/connectDB.js";
import register_Router from "./routes/register.routes.js";
import login_Router from "./routes/login.routes.js";

dotenv.config()

const port : string | undefined = process.env.PORT
const app = express();

app.use(express.json());
app.use(cors());

await connectDB();

//routes

app.use("/api",register_Router);
app.use("/api/",login_Router)

app.listen(port , ():void=>console.log("servering running on port 3000"))