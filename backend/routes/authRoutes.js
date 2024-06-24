const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/User');

router.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  const newUser = { name, email, password };

  User.createUser(newUser, (err, user) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Failed to register user' });
    } else {
      res.status(201).json({ message: 'User registered successfully' });
    }
  });
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.status(200).json({ message: 'Login successful' });
});

router.post('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Logout successful' });
});

module.exports = router;
