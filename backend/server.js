import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from 'dotenv';
import path from 'path';
import entryRoute from './routes/entryRoutes.js';

dotenv.config();

connectDB();

const app = express();
const __dirname = path.resolve();
app.use(express.json());
app.use(express.static('public'));

app.use(entryRoute);

app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
})

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running ${process.env.NODE_ENV} on port #${PORT}`)
);
