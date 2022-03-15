const mongoose = require("mongoose");
const autopopulate = require('mongoose-autopopulate');


const answer_schema = mongoose.Schema({
    id_answer: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },

    correct_answer: {
        type: Boolean,
        required: true
    },

    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question_schema',
        required: true,
        autopopulate: true
    }
});

module.exports = mongoose.model("Answer", answer_schema, "answer");