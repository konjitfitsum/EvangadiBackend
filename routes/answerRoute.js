import express from "express";
import { postAnswer } from "../controller/answerController.js";

const router = express.Router();

// Post Answers for a Question
router.post("/", postAnswer);

export default router;
