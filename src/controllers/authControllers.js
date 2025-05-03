import User from "../model/userModel.js";
import bcrypt, { compare } from "bcrypt";
import { generateToken } from "../utils/generateToken.js";

export const signup = async (req, res) => {
  console.log("user signed in ");
  try {
    const { name, emailid, password } = req.body;
    if (!name || !emailid || !password) {
      throw new Error("all fields are required");
    }

    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      name,
      emailid,
      password: hashPassword,
    });

    await newUser.save();
    generateToken(res, newUser._id);

    res.status(201).json({
      message: `user successfully registered`,
      user: {
        _id: newUser._id,
        name: newUser.name,
        emailid: newUser.emailid,
        isAdmin: newUser.isAdmin,
        createdAt: newUser.createdAt,
      },
    });
  } catch (error) {
    console.log(`Error : ${error.message}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { emailid, password } = req.body;

    if (!emailid || !password) {
      return res
        .status(400)
        .json({ error: `email and password both are required` });
    }
    const existingUser = await User.findOne({ emailid: emailid });
    if (!existingUser) {
      return res.status(401).json({ error: `invalid credentials` });
    }
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(401).json({ error: `invalid credentials` });
    }

    generateToken(res, existingUser._id);

    res.status(200).json({
      message: `Login successful`,
      user: {
        _id: existingUser._id,
        name: existingUser.name,
        emailid: existingUser.emailid,
        isAdmin: existingUser.isAdmin,
        createdAt: existingUser.createdAt,
      },
    });
  } catch (error) {
    console.log(`Login Error : ${error.message}`);
    res.status(500).json({ error: `internal server error` });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.log(` Error : ${error.message}`);
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      res.status(200).json({
        id: user._id,
        name: user.name,
        emailid: user.emailid,
      });
    }
  } catch (error) {
    console.log(`error :${error.message}`);
    res.status(400).json({ error: `user not found` });
  }
};

export const logoutUser = async (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
};

export const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      res.status(404).json({ error: `User not found` });
    }
    if (req.body.emailid && req.body.emailid !== user.emailid) {
      res.status(405).json({ error: `Email id updation not allowed` });
    }

    user.name = req.body.name || user.name;

    if (req.body.password) {
      const saltRounds = 10;
      user.password = await bcrypt.hash(req.body.password, saltRounds);
    }

    const updateduser = await user.save();
    res.status(200).json({
      message: `User updated successfully`,
      _id: updateduser._id,
      name: updateduser.name,
      admin: updateduser.isAdmin,
    });
  } catch (error) {
    console.log(`error :${error.message}`);
  }
};

export const deleteByUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.isAdmin) {
      return res.status(403).json({ error: "You cannot delete admin" });
    }

    await user.deleteOne();
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log("Error deleting user:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
