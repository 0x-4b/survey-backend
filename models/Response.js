const mongoose = require('mongoose');

const SurveyResponseSchema = new mongoose.Schema(
  {
    vape: {
      type: String,
      required: true,
    },
    responses: [
      {
        questionId: {
          type: String,
          required: true, // e.g., "question_1"
        },
        answer: {
          type: [String],  // For multi-select questions, store the answers as an array of strings
          required: true,  // The selected answer(s) for that question
        },
      },
    ],
    comments: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

const SurveyResponse = mongoose.model('SurveyResponse', SurveyResponseSchema);

module.exports = SurveyResponse;
