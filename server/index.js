import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/User-route.js";
import videoRouter from "./routes/Video-route.js";
import commentRouter from "./routes/Commnet-route.js";
import authRouter from "./routes/Auth.js";
import cookieParser from "cookie-parser";
import cors from 'cors'
const app = express();
app.use(cors())
app.use(express.json());
dotenv.config();
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/videos", videoRouter);
app.use("/api/comments", commentRouter);



mongoose
    .connect(process.env.MONGO)
    .then(() => app.listen(8000))
    .then(() => console.log("Database in connected to localHost 8000"))
    .catch((err) => console.log(err));
