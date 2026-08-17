import {Router} from "express";

import registerController from "../controllers/register.controllers.js";

const register_Router:Router = Router();


register_Router.post("/register",registerController);


export default register_Router;