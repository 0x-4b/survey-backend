const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const surveyRoutes = require('./routes/survey'); // Ensure correct path to your survey routes

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use('/api/surveys', surveyRoutes);

// MongoDB connection using MONGO_URI from .env file
const DB_URI = process.env.MONGO_URI; // Ensure your .env file has MONGO_URI

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
