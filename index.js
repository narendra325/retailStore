import express from "express";
import { connectDB } from "./src/config/database.js";
import authRoutes from "./src/routes/authRoutes.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api/users", authRoutes);
const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is running on ${port}`);
    });
  } catch (error) {
    console.log(`Error : ${error.message}`);
  }
};

startServer();
