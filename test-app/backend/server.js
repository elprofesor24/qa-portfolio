// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/login', require('./routes/login'));
app.use('/signup', require('./routes/signup'));
app.use('/forgot-password', require('./routes/forgot-password'));


// Default
app.get('/', (req, res) => {
  res.send('Test App Backend is running.');
});

// Start
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});