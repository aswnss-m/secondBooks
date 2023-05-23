const router = require('express').Router();
const User = require('../models/User.model');

router.route('/').post(async (req, res) => {
  try {
    const name = req.body.name
    const email = req.body.email
    const username = req.body.username
    const password = req.body.password
    const phoneNumber = req.body.phoneNumber
const existingUser = await User.findOne({ username });
if (existingUser) {
  return res.status(409).json({ message: 'Username already exists' });
}
    const newUser = new User({
      name,
      email,
      username,
      password,
      phoneNumber,
    });

    const savedUser = await newUser.save();

    res.status(200).json({ message: 'User registered successfully', user: savedUser });
  } catch (error) {
    res.status(400).json({ message: 'User registration failed', error: error.message });
  }
});

module.exports = router;
