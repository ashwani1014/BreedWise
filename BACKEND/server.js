import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/Databaseconnection.js";
import bodyParse from "body-parser";
import cors from "cors";
import cron from "node-cron";
import router from "./Routes/AuthRoutes.js";
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

// ─── Auto-refresh Rescue Pets every 5 days ───────────────────────────────────
// Cron format: "0 0 */5 * *" = midnight every 5th day
cron.schedule("0 0 */5 * *", async () => {
  console.log("🔄 [Cron] Starting auto-refresh of rescue pets data...");
  try {
    const { fetchRescuePets } = await import("./Seed/FetchRescuePets.js");
    await fetchRescuePets();
    console.log("✅ [Cron] Rescue pets data refreshed successfully!");
  } catch (err) {
    console.error("❌ [Cron] Failed to refresh rescue pets:", err.message);
  }
});

console.log("⏰ Cron job scheduled: Auto-refresh rescue pets every 5 days");