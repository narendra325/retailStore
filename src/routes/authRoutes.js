import express from "express";
import { login, signup } from "../controllers/authControllers.js";
const router = express.Router();

router.route("/").post(signup).get(login);

export default router;
