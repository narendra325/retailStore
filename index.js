import express from "express";
import { connectDB } from "./src/config/database.js";
import authRoutes from "./src/routes/authRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use("/api/users", authRoutes);

const startserver = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`The server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(`Error : ${error.message}`);
    process.exit(1);
  }
};
startserver();
