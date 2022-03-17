var express = require("express");
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

/* GET show quiz page */
// router.get("/show", function (req, res, next) {
//   res.render("show", { title: "Show Quiz" });
// });

/* GET try quiz page */
router.get("/try", function (req, res, next) {
  res.render("try", { title: "Try Quiz" });
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
  let questions = await controller.getQuestion({_id:quizzes._id}, { sort: { title: 1 } });

  let answers = await controller.getAnswer({}, { sort: { answers: 1 } });

  res.render("show", {
    title: "Show Quiz",
    quizzes,
    questions,
    answers,
  });
});

module.exports = router;
