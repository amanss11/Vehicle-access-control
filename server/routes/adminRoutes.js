const express = require('express');
const router = express.Router();
const { registerAdmin, loginAdmin } = require('../controllers/adminController');

router.post('/register', registerAdmin); // Call only once
router.post('/login', loginAdmin);

module.exports = router;
