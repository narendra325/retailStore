import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const key = process.env.SECREAT_KEY

export const generateToken = (res, userid) => {
  //first create token
  const token = jwt.sign({ id: userid }, key, { expiresIn: "3d" });

  //need to store  token in cookie
  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });

  return token;
};
