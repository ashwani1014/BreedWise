// Routes/HomeRoute.js

import express from "express";
import { getHomeData } from "../Controller/HomeController.js";

const router = express.Router();

router.get("/", getHomeData);

export default router;