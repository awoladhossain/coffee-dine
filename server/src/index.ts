import cors from "cors";
import dotenv from "dotenv";
import express, { type Request, type Response } from "express";
import connectDB from "../db/db.ts";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  res.send("Hello World");
});

connectDB();
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📍 Local: http://localhost:${PORT}`);
});
