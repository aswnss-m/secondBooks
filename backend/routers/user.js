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
router.route("/updateAddress").put(async (req,res)=>{
  try{
    const userId = req.body.userId;
    const address = req.body.address;
    const user = await User.findById(userId);
    if(!user){
      return res.status(404).json({message:"User not found"});
    }
    user.address = address;
    const updatedUser = await user.save();
    res.status(200).json({message:"User updated successfully",user:updatedUser});
  }catch(error){
    res.status(500).json({message:"Internal server error"});
  }
})

router.route('/Additem').put(async (req, res) => {
  const userId = req.body.userId;
  const bookId = req.body.bookId;
  console.log(userId, bookId);
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.cart.push(bookId);
    const updatedUser = await user.save();
    const { _id, ...userWithoutId } = updatedUser.toObject(); // Exclude _id field

    res.status(200).json({ message: 'User updated successfully', user: { id: _id, ...userWithoutId } });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});
router.route("/removeitem").put(async (req,res)=>{
  const userId = req.body.userId;
  const bookId = req.body.bookId;

  try{
    const user = await User.findById(userId);
    if(!user){
      return res.status(404).json({message:"User not found"});
    }
    user.cart.pull(bookId);
    const updatedUser = await user.save();
    const { _id, ...userWithoutId } = updatedUser.toObject(); // Exclude _id field
    res.status(200).json({ message: 'User updated successfully', user: { id: _id, ...userWithoutId } });

  }catch(error){
    res.status(500).json({message:error});
  }
  
})

router.route('/:id/sell').get(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const sellBooks = user.books;
    res.json(sellBooks);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;
