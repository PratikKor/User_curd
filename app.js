import express, { json } from "express";
import mongoose from "mongoose";
import "./db/conn";
import users from "./models/userSchema.js";
import cors from "cors";
import router from "./routes/router";
import dotenv from "dotenv";

const port = process.env.PORT || 8003;
const app = express();

dotenv.config();

app.use(cors());
app.use(json());

app.get("/",(req,res)=>{
    res.json("server start")
})

app.use(router);

app.listen(port, () => {
    console.log(`server is start port number ${port}`);
});