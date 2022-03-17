const mongoose = require("mongoose");

const answer_schema = mongoose.Schema({
    answers: {
        type: Array,
        required: true
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: true,
    }
});

module.exports = mongoose.model("Answer", answer_schema, "answer");
