import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import dbConnection from "./config/dbConfig.js";
import authMiddleware from "./middleware/authMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import questionRoutes from "./routes/questionRoute.js";
import answerRoutes from "./routes/answerRoute.js";

const app = express();
const port = process.env.PORT || 5000;

// Test GET request
app.get("/", (req, res) => {
  res.status(200).send("welcome-to Evangadi-");
});

// CORS middleware
app.use(
  cors({
    origin: [
      // "http://localhost:5173",
      // "http://localhost:5000",
      "https://technotes.onrender.com",
      // "https://evangadi-forum-project-frontend.vercel.app/",
    ],
  })
);

// JSON middleware
app.use(express.json());

// User routes middleware
app.use("/api/user", userRoutes);

// Questions routes middleware
app.use("/api/question", questionRoutes);

// Answers routes middleware
app.use("/api/answer", answerRoutes);

async function start() {
  try {
    const result = await dbConnection.execute("select 'test'");
    console.log("db connected");
    await app.listen(port);
    console.log(`server running and listening on port ${port}`);
  } catch (err) {
    console.error(err.message);
  }
}

start();
