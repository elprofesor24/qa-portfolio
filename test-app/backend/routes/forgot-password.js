const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { email } = req.body;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  if (email === 'test@test.com') {
    return res.status(200).json({ message: 'Password reset link was sent to your email' });
  } else {
    return res.status(404).json({ message: 'The email address provided does not exist in our system' });
  }
});

module.exports = router;