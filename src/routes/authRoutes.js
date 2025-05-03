import express from "express";
import {
  deleteByUser,
  getAllUsers,
  getUserById,
  login,
  logoutUser,
  signup,
  updateUserProfile,
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
router.patch("/edit", authMiddleware, updateUserProfile);
router.delete("/delete/:id", authMiddleware, deleteByUser);
export default router;
