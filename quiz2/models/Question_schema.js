const mongoose = require("mongoose");

const question_schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  // quiz: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Quiz',
  //     required: true,
  // }
});

module.exports = mongoose.model("Question", question_schema, "question");
