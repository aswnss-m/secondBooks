const router = require('express').Router();
const User = require('../models/User.model');

router.post('/', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    // Check if the user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username' });
    }

    // Compare the provided password with the hashed password in the database
    if (password !== user.password) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Password is correct, login successful
    const details = {
      id : user._id,
      name : user.name,
      email : user.email,
      username : user.username,
      phoneNumber : user.phoneNumber,
      books : user.books,
      cart : user.cart,
      address : user.address,
      orders : user.orders
    }
    res.status(200).json({ message: 'Login successful', details });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
