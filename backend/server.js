import express from "express";
import dotenv from "dotenv";
import authRoutes from "./route/auth.routes.js";
import connection from "./db/connectToMongoDb.js"

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.listen(PORT, () => {
    connection();
    console.log(`Server running at port ${PORT}`);
});

app.get("/", (req, res) => {
   res.send("Hello Mom!!"); 
});

app.use("/api/auth", authRoutes);
