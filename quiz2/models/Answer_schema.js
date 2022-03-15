const mongoose = require("mongoose");
const autopopulate = require('mongoose-autopopulate');


const answer_schema = mongoose.Schema({
    answer: {
        type: Array,
        required: true
    },
    // answer1: {
    //     type: String,
    //     required: true
    // },
    // answer2: {
    //     type: String,
    //     required: true
    // },
    // answer3: {
    //     type: String,
    //     required: true
    // },
    // answer4: {
    //     type: String,
    //     required: true
    // },
    correct: {
        type: Boolean,
        required: true
    },
    // question: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Question_schema',
    //     required: true,
    //     autopopulate: true
    // }
});

answer_schema.plugin(autopopulate);
module.exports = mongoose.model("Answer", answer_schema, "answer");
