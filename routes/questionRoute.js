import express from "express";
import {
  postQuestion,
  getAllQuestions,
  getQuestionAndAnswer,
} from "../controller/questionController.js";

const router = express.Router();

// Get all questions
router.get("/", getAllQuestions);

// Get single question
router.get("/:questionId", getQuestionAndAnswer);

// Post a question
router.post("/", postQuestion);

export default router;
