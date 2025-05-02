import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db_password = process.env.PASSWORD;

export const connectDB = async () => {
  try {
    const db_url = `mongodb+srv://narendrasingampalli2:${db_password}@cluster0.rvo6uzk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    await mongoose.connect(db_url);
    console.log("db connected successfully");
  } catch (error) {
    console.log(`Error : $${error.message}`);
  }
};
