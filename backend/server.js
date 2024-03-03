import express from "express";
import dotenv from "dotenv";
import authRoutes from "./route/auth.routes.js";
import messageRoutes from "./route/message.routes.js";
import userRoutes from "./route/user.routes.js";
import connection from "./db/connectToMongoDb.js"
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js"

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

server.listen(PORT, () => {
    connection(); // db connection
    console.log(`Server running at port ${PORT}`);
});

app.get("/", (req, res) => {
   res.send("Hello Mom!!"); 
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
