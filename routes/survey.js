const express = require('express');
const router = express.Router();
const SurveyResponse = require('../models/Response'); // Ensure correct path

// POST request to submit a survey response
router.post('/', async (req, res) => {
  const { vape, responses, comments } = req.body;

  // Validate required fields
  if (!vape || !responses || !Array.isArray(responses) || responses.length === 0) {
    return res.status(400).json({ message: 'Missing required fields: vape or responses' });
  }

  // Validate the format of responses (ensure each has questionId and answer)
  for (let response of responses) {
    if (!response.questionId || !response.answer) {
      return res.status(400).json({ message: 'Each response must include questionId and answer' });
    }
  }

  try {
    // Create a new survey response entry
    const newResponse = new SurveyResponse({
      vape,
      responses,
      comments,
    });

    // Save the response to the database
    await newResponse.save();

    // Send success response
    res.status(201).json({ message: 'Survey response submitted successfully!' });
  } catch (err) {
    // Log the error and send an error response
    console.error('Error saving survey response:', err);
    res.status(500).json({
      message: 'There was an error submitting your response.',
      error: err.message,
      stack: err.stack,
    });
  }
});

module.exports = router;
