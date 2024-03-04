import express from "express";
import dotenv from "dotenv";
import authRoutes from "./route/auth.routes.js";
import messageRoutes from "./route/message.routes.js";
import userRoutes from "./route/user.routes.js";
import connection from "./db/connectToMongoDb.js"
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js"
import path from 'path';

const __dirname = path.resolve();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
});



server.listen(PORT, () => {
    connection(); // db connection
    console.log(`Server running at port ${PORT}`);
});