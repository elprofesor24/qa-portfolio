const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { firstName, lastName, email, password, aboutMe } = req.body;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (!firstName || !lastName || !email || !password || !aboutMe) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters long' });
  }

  return res.status(200).json({ message: 'Signup successful' });
});

module.exports = router;