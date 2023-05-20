const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/User.model');

router.route('/').post(async (req, res) => {
  try {
    const { name, email, username, password, phoneNumber } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      username,
      password: hashedPassword,
      phoneNumber,
    });

    const savedUser = await newUser.save();

    res.status(200).json({ message: 'User registered successfully', user: savedUser });
  } catch (error) {
    res.status(400).json({ message: 'User registration failed', error: error.message });
  }
});

module.exports = router;
