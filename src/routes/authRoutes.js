import express from "express";
import {
  getAllUsers,
  getUserById,
  login,
  logoutUser,
  signup,
} from "../controllers/authControllers.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const router = express.Router();

// Public routes
router.post("/", signup);
router.post("/login", login);
router.post("/logout", logoutUser);

// Protected routes
router.get("/", authMiddleware, getAllUsers);
router.get("/:id", authMiddleware, getUserById);
export default router;
