import jwt from "jsonwebtoken";
import User from "../model/userModel.js";
import dotenv from "dotenv";

dotenv.config();

const key = process.env.SECREAT_KEY;

export const authenticate = async (req, res, next) => {
  if (token) {
    try {
      const token = req.cookies.jwt;

      const decode = jwt.verify(token, key);
      req.user = await User.findById(decode.id).select("-password");
      next();
    } catch (error) {
      res.status(401).json({ error: `invalid token` });
    }
  } else {
    res.status(401).json({ error: `Not authrized,  no token` });
  }
};

export const authorizeAdmin = async (req, res, next) => {
  try {
    if (req.user && req.user.isAdmin) {
      next();
    } else {
      res.status(403).json({ error: "Not authorized as admin" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error during authorization" });
  }
};
