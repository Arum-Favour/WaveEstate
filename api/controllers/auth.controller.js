import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    //HASH THE PASSWORD

    const hashedPassword = await bcrypt.hash(password, 10);

    //CREATE A NEW USER AND SAVE TO THE DATABASE
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    console.log(newUser);

    res.status(201).json({ message: "User Created Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create User" });
  }
};




export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    //CHECK IF USER EXISTS
    const user = await prisma.user.findUnique({
      where: { username: username },
    });

    if (!user) return res.status(401).json({ message: "Invalid Credentials" });

    //CHECK IF THE PASSWORD IS CORRECT

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      return res.status(401).json({ message: "Invalid Credentials" });

    //GENERATE COOKIE TOKEN AND SEND TO USER


    const token = jwt.sign(
      {
        id: user.id,
        isAdmin: true,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '7d' }
    );

    const {password:userPassword, ...userInfo} = user

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        maxAge: '7d',
      })
      .status(200)
      .json(userInfo);
    console.log("Generated token:", token);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to log in" });
  }
};




export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({message:"Logout Successful"})
};
