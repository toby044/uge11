const mongoose = require("mongoose");
const autopopulate = require('mongoose-autopopulate');

const question_schema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    quiz: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz_schema',
        required: true,
        autopopulate: true,
    }]
});

question_schema.plugin(autopopulate);
module.exports = mongoose.model("Question", question_schema, "question");