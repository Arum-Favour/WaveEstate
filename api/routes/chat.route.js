import express from "express";
import {
  getChat,
  getChats,
  addChat,
  readChat,
} from "../controllers/chat.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

//TOOK OFF THE VERIFY TOKEN MIDDLEWARE AS MY HOSTING PLATFORM WASN'T ALLOWING THE PASS OF COOKIES
router.get("/", verifyToken, getChats);
router.get("/:id", verifyToken, getChat);
router.post("/", verifyToken, addChat);
router.put("/read/:id", verifyToken, readChat);


export default router;
