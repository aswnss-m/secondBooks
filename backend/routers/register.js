const router = require('express').Router();
const User = require("../models/User.model");

router.route('/').post(async (req, res) => {
  try {
    // Extract data from the request body
    const { name, email, password, location, phoneNumber } = req.body;

    // Create a new user instance
    const newUser = new User({
      name,
      email,
      password,
      location,
      phoneNumber
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    res.status(200).json({ message: "User registered successfully", user: savedUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
