const mongoose = require("mongoose");

const quiz_schema = mongoose.Schema({
    id_quiz: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        rquired: true,
    }

});

module.exports = mongoose.model("Quiz", quiz_schema, "quiz");