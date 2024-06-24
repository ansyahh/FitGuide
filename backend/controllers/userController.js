const db = require('../config/passport');
const bcrypt = require('bcryptjs');
const passport = require('passport');

const registerUser = (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) throw err;
    db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hash], (err, results) => {
      if (err) throw err;
      res.send('User registered');
    });
  });
};

const loginUser = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).send(info.message);
    req.logIn(user, err => {
      if (err) return next(err);
      return res.send('User authenticated');
    });
  })(req, res, next);
};

const logoutUser = (req, res) => {
  req.logout(err => {
    if (err) return next(err);
    res.send('User logged out');
  });
};

const getCurrentUser = (req, res) => {
  if (req.isAuthenticated()) {
    res.send(req.user);
  } else {
    res.status(401).send('Not authenticated');
  }
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser
};
