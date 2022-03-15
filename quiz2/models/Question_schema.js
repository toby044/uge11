const mongoose = require("mongoose");
const autopopulate = require('mongoose-autopopulate');


const question_schema = mongoose.Schema({
    id_question: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },

    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz_schema',
        required: true,
        autopopulate: true
    }
});

module.exports = mongoose.model("Question", question_schema, "question");