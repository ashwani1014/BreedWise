import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/Databaseconnection.js";
import bodyParse from "body-parser";
import cors from "cors"
import router from "./Routes/AuthRoutes.js"
import homeRoute from "./Routes/HomeRoutes.js";
import aiRoute from "./Routes/AiRoutes.js";



dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParse.json());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.use("/api/ai", aiRoute);
app.use('/auth', router);
app.use("/api/home", homeRoute);


const PORT = process.env.Port;

app.listen(PORT, () => {
  console.log("Server Running");
  console.log(process.env.PORT);
});


connectDB();