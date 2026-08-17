import {Router} from "express";

import loginController from "../controllers/login.controllers.js";

const login_Router:Router = Router();


login_Router.post("/login",loginController);


export default login_Router;