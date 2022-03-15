const mongoose = require("mongoose");

const quiz_schema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    }
});

module.exports = mongoose.model("Quiz", quiz_schema, "quiz");