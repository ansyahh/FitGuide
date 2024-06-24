const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const db = require('../db');

const User = {};

User.createUser = (newUser, result) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      db.query('INSERT INTO users SET ?', newUser, (err, res) => {
        if (err) {
          result(err, null);
          return;
        }
        result(null, { id: res.insertId, ...newUser });
      });
    });
  });
};

User.getUserByEmail = (email, result) => {
  db.query('SELECT * FROM users WHERE email = ?', email, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, res[0]);
  });
};

User.getUserById = (id, result) => {
  db.query('SELECT * FROM users WHERE id = ?', id, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, res[0]);
  });
};

module.exports = User;
