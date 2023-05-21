const router = require('express').Router();
const User = require('../models/User.model');

router.route('/addbook').put(async (req, res) => {
  try {
    const userId = req.body.userId; 
    const bookId = req.body.bookId;

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Append the book ID to the books array
    user.books.push(bookId);

    // Save the updated user
    const updatedUser = await user.save();

    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
