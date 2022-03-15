var express = require('express');
var router = express.Router();
const controller = require('../controllers/controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz Index' });  
});

/* GET create quiz page */
router.get('/create', function(req, res, next) {
  res.render('create', { title: 'Create Quiz' });
});

/* GET show quiz page */
router.get('/show', function(req, res, next) {
  res.render('show', { title: 'Show Quiz' });

});

/* GET try quiz page */
router.get('/try', function(req, res, next) {
  res.render('try', { title: 'Try Quiz' });
});


/* POST Quiz */
router.post('/create', function(req, res, next) {
  controller.postQuiz(req,res,next);
  controller.postQuestion(req,res,next);
  controller.postAnswer(req, res, next);
  res.redirect('/show');
});



module.exports = router;
