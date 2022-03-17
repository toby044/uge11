const mongoose = require("mongoose");
const mongoUtil = require("../models/mongoUtil.js");
const Quiz = require("../models/Quiz_schema");
const Question = require("../models/Question_schema");
const Answer = require("../models/Answer_schema");

module.exports = {
  postQuiz: async function (req) {
    const db = await mongoUtil.mongoConnect();
    const quiz = new Quiz({
      title: req.body.quizTitle,
      description: req.body.quizDescription,
    });

    Quiz.create(quiz, function (error) {
      if (error) {
        console.log("error quiz");
      }
      db.close();
    });
  },

  getQuiz: async function (que, sort) {
    const db = await mongoUtil.mongoConnect();
    const quiz = await Quiz.find(que, null, sort);
    db.close();
    return quiz;
  },

  postQuestion: async function (req) {
    const db = await mongoUtil.mongoConnect();
    const question = new Question({
      title: req.body.question,
    });

    Question.create(question, function (error) {
      if (error) {
        console.log("error question");
      }
      db.close();
    });
  },

  getQuestion: async function (que, sort) {
    const db = await mongoUtil.mongoConnect();
    const question = await Question.find(que, null, sort);
    db.close();
    return question;
  },

  postAnswer: async function (req) {
    const db = await mongoUtil.mongoConnect();
    const answer = new Answer({
      answers: [
        { answer: req.body.answer1, correct: req.body.checked1 },
        { answer: req.body.answer2, correct: req.body.checked2 },
        { answer: req.body.answer3, correct: req.body.checked3 },
        { answer: req.body.answer4, correct: req.body.checked4 },
      ],
    });

    Answer.create(answer, function (error) {
      if (error) {
        console.log("error answer");
      }
      db.close();
    });
  },

  getAnswer: async function (que, sort) {
    const db = await mongoUtil.mongoConnect();
    const answer = await Answer.find(que, null, sort);
    db.close();
    return answer;
  },
};
