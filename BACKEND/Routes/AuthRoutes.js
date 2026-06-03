import express from "express";
import {signup} from "../Controller/userController.js";
import { LoginValidation } from "../Middleware/AuthValidation.js";
import { signupValidation } from "../Middleware/AuthValidation.js";




const router=express.Router();

router.get("/login",LoginValidation,);
router.post("/signup",signupValidation,signup);


export default router;