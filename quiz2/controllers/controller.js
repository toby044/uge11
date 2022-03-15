const mongoose = require("mongoose");
const mongoUtil = require("../models/mongoUtil.js");
const Quiz = require("../models/Quiz_schema");
const Question = require("../models/Question_schema");
const Answer = require("../models/Answer_schema");

module.exports = {
    postQuiz: async function (req) {
        const db = await mongoUtil.mongoConnect();
        const quiz = new Quiz ({
            title: req.body.quizTitle,
            description: req.body.quizDescription
        });

        Quiz.create(quiz, function(error) {
            if(error){
                console.log('error quiz');
            }
            db.close();
        });
    },

    postQuestion: async function (req) {
        const db = await mongoUtil.mongoConnect();
        const question = new Question ({
            title: req.body.question,
        });

        Question.create(question, function(error) {
            if(error){
                console.log('error question');
            }
            db.close();
        });
    },

    postAnswer: async function (req) {
        const db = await mongoUtil.mongoConnect();
        const answer = new Answer ({
            answer: [req.body.answer1, req.body.answer2, req.body.answer3, req.body.answer4],
            // answer1: req.body.answer1,
            // answer2: req.body.answer2,
            // answer3: req.body.answer3,
            // answer4: req.body.answer4,
            correct: false,
        });

        Answer.create(answer, function(error) {
            if(error){
                console.log('error answer');
            }
            db.close();
        });
    }
    
}