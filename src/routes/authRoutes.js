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
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
const router = express.Router();

// Public routes
router.post("/", signup);
router.post("/login", login);
router.post("/logout", logoutUser);

// Protected routes
router.get("/", authenticate, authorizeAdmin, getAllUsers);
router.get("/:id", authenticate, getUserById);
router.patch("/edit", authenticate, updateUserProfile);
router.delete("/delete/:id", authenticate, authorizeAdmin, deleteByUser);
export default router;
