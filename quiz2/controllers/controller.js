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

    try {
      let rc = await Quiz.create(quiz);
      db.close();
      console.log(rc);
      return rc;
    } catch (err) {
      console.log(err)
    }
  },

  getQuiz: async function (que, sort) {
    const db = await mongoUtil.mongoConnect();
    const quiz = await Quiz.find(que, null, sort);
    db.close();
    return quiz;
  },

  postQuestion: async function (req, id) {
    const db = await mongoUtil.mongoConnect();
    const question = new Question({
      title: req.body.question,
      quiz: id
    });

    try {
      let rc = await Question.create(question);
      db.close();
      console.log(rc);
      return rc;
    } catch (err) {
      console.log(err)
    }
  },

  getQuestion: async function (que, sort) {
    const db = await mongoUtil.mongoConnect();
    const question = await Question.find(que, null, sort);
    db.close();
    return question;
  },

  postAnswer: async function (req, id) {
    const db = await mongoUtil.mongoConnect();
    const answer = new Answer({
      answers: [
        { answer: req.body.answer1, correct: req.body.checked1 },
        { answer: req.body.answer2, correct: req.body.checked2 },
        { answer: req.body.answer3, correct: req.body.checked3 },
        { answer: req.body.answer4, correct: req.body.checked4 },
      ],
      question: id
    });

    try {
      let rc = await Answer.create(answer);
      db.close();
      console.log(rc);
      return rc;
    } catch (err) {
      console.log(err)
    }
  },

  getAnswer: async function (que, sort) {
    const db = await mongoUtil.mongoConnect();
    const answer = await Answer.find(que, null, sort);
    db.close();
    return answer;
  },
};
