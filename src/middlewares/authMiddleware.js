import jwt from "jsonwebtoken";
import User from "../model/userModel.js";
import dotenv from "dotenv";

dotenv.config();

const key = process.env.SECREAT_KEY;

export const authMiddleware = async (req, res, next) => {
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
