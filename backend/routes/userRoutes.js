const express = require('express');
const { registerUser, loginUser, logoutUser, getCurrentUser } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser);
router.get('/current', getCurrentUser);

module.exports = router;
