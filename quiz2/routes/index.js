var express = require("express");
const { regexpToText } = require("nodemon/lib/utils");
var router = express.Router();
const controller = require("../controllers/controller");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Quiz Index" });
});

/* GET create quiz page */
router.get("/create", function (req, res, next) {
  res.render("create", { title: "Create Quiz" });
});

// Quiz1 = _id: "623355f2c0642195b43f0d1d"
// Quiz2 = _id: "6233564bc0642195b43f0d26"

/* GET try quiz page */
router.get("/try", async function (req, res, next) {
  let quizzes = await controller.getQuiz({}, { sort: { title: 1 } });
  // console.log(quizzes);
  // console.log(quizzes[0]._id);
  let questions = await controller.getQuestion({quiz: quizzes[0]._id}, { sort: { title: 1 } });
  // console.log(questions);
  let answers = await controller.getAnswer({question: questions[0]._id}, { sort: { answers: 1 } });
  // console.log(answers);

  res.render("try", {
    title: "Try Quiz",
    quizzes,
    questions,
    answers,
  });

});

/* POST Quiz */
router.post("/create", async function (req, res, next) {
  let q = await controller.postQuiz(req);
  let qq = await controller.postQuestion(req, q._id);
  let a = await controller.postAnswer(req, qq._id);
  res.redirect('/create');
});

/* GET Show quiz pag */
router.get("/show", async function (req, res, next) {
  let quizzes = await controller.getQuiz({}, { sort: { title: 1 } });
  let questions = await controller.getQuestion({}, { sort: { title: 1 } });

  let answers = await controller.getAnswer({}, { sort: { answers: 1 } });

  res.render("show", {
    title: "Show Quiz",
    quizzes,
    questions,
    answers,
  });
});

module.exports = router;
