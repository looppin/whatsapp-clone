import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv/config";

const app = express();
const port = process.env.PORT || 9000;


mongoose.connect(process.env.DB_URL);

app.get("/", (req, res) => {
    res.status(200).send("Merhaba!");
});

app.listen(port, ()=> console.log(`Localhost:${port} dinleniyor...`));
