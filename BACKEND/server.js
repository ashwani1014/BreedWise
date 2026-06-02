import express from "express";
import dotenv from "dotenv";
 
dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running");
});

const PORT=process.env.Port;

app.listen(PORT, () => {
  console.log("Server Running");
  console.log(process.env.PORT);
});