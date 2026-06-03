import express from "express";
import {login, signup} from "../Controller/userController.js";
import { LoginValidation } from "../Middleware/AuthValidation.js";
import { signupValidation } from "../Middleware/AuthValidation.js";




const router=express.Router();

router.post("/login",LoginValidation,login);
router.post("/signup",signupValidation,signup);


export default router;