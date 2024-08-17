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
router.get("/", getChats);
router.get("/:id", getChat);
router.post("/", addChat);
router.put("/read/:id", readChat);

export default router;
