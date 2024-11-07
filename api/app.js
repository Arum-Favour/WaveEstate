import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";

const app = express();
const port = process.env.PORT || 8800;


app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRoute);
<<<<<<< HEAD
app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);
=======
>>>>>>> e57e3b9eb5092d1c10f2773dfc1dc43dada60d4c
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

