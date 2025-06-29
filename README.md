# Survey Backend

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-brightgreen.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-lightgrey.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-%3E%3D4.0-green.svg)](https://www.mongodb.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A RESTful backend API for the full-stack vaping survey web app. Built with Node.js, Express.js, and MongoDB to securely handle survey data and user requests.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Security Notes](#security-notes)
- [Related Projects](#related-projects)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## Overview

This backend powers the survey web application by providing endpoints to submit and store anonymous survey responses. The API is designed for flexibility, security, and easy deployment on cloud platforms.

---

## Features

- 🚀 Modern Node.js/Express.js stack
- 🗄️ MongoDB storage for survey responses
- 🕵️ Anonymous data collection by default
- 🔒 Environment-based configuration (no secrets in code)
- ⚡ Simple, extensible routing structure

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/0x-4b/survey-backend.git
   cd survey-backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

---

## Configuration

Before running, create a `.env` file in the root directory.  
Use the provided `.env.example` as a template:

```dotenv name=.env.example
MONGO_URI=your_mongodb_connection_string_here
PORT=5000
```

> **WARNING:**  
> Never commit your real `.env` file or production credentials.

---

## Usage

Start the server in development mode:
```bash
npm start
```
The backend will run on `http://localhost:5000` by default (or the port specified in your `.env`).

---

## API Endpoints

| Method | Endpoint         | Description                      |
|--------|------------------|----------------------------------|
| POST   | `/api/surveys`   | Submit a survey response         |

**Example request to `/api/surveys`:**
```json
{
  "vape": "yes",
  "responses": [
    {"questionId": "question_1", "answer": ["option_a"]},
    {"questionId": "question_2", "answer": ["option_b", "option_c"]}
  ],
  "comments": "Optional comments here"
}
```

---

## Project Structure

```
survey-backend/
├── models/
│   └── Response.js
├── routes/
│   └── survey.js
├── server.js
├── .env.example
├── package.json
├── README.md
└── LICENSE
```

---

## Security Notes

- **No secrets or .env files are committed to this repo.**
- **Always use your own environment variables for production or cloud deployment.**
- **If you deploy this backend publicly, add rate limiting and authentication as needed to prevent abuse.**
- **Do NOT share your MongoDB URI or any credentials in issues or documentation.**

---

## Related Projects

- **Frontend:** [survey-frontend](https://github.com/0x-4b/survey-frontend) – The React-based user interface for this backend API.

---

## Roadmap

- [ ] Add admin endpoints for analytics (protected)
- [ ] Rate limiting and spam protection
- [ ] Support for additional question types
- [ ] Automated tests

---

## Contributing

Pull requests and suggestions are welcome!  
To contribute:

1. Fork the repo and create your branch (`git checkout -b feature/your-feature`)
2. Commit your changes (`git commit -am 'Add new feature'`)
3. Push to the branch (`git push origin feature/your-feature`)
4. Open a Pull Request

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Author

**0x-4b**  
GitHub: [@0x-4b](https://github.com/0x-4b)

---
