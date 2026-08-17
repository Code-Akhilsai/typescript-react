import {Router} from "express";

import profileController from "../controllers/profile.controllers.js";
import middleware from "../middlewares/profile.middlewares.js";

const profile_Router:Router = Router();


profile_Router.post("/profile",middleware,profileController);


export default profile_Router;