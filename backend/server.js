import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from 'dotenv';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running.......");
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running ${process.env.NODE_ENV} on port #${PORT}`)
);
