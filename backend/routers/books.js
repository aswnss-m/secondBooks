const router = require('express').Router()
const Books = require("../models/Books.model")

// Get All
router.route('/').get((req, res) => {
    Book.find()
      .populate('seller', 'name')
      .then(books => res.json(books))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
// Get specific
router.route('/:id').get((req, res) => {
    Book.findById(req.params.id)
      .populate('seller', 'name')
      .then(book => res.json(book))
      .catch(err => res.status(400).json('Error: ' + err));
  });
// Filtered
// GET /search?title=JavaScript&subject=Computer%20Science&maxPrice=50

router.get('/search', async (req, res) => {
  try {
    const filters = {};

    // Extract filter values from query parameters
    const { title, subject, semester, minPrice, maxPrice, course } = req.query;

    // Build the filters based on the provided parameters
    if (title) {
      filters.title = { $regex: title, $options: 'i' }; // Case-insensitive regex matching
    }
    if (subject) {
      filters.Subject = subject;
    }
    if (semester) {
      filters.semester = semester;
    }
    if (minPrice || maxPrice) {
      filters.price = {};
      if (minPrice) {
        filters.price.$gte = parseInt(minPrice);
      }
      if (maxPrice) {
        filters.price.$lte = parseInt(maxPrice);
      }
    }
    if (course) {
      filters.Course = course;
    }

    const books = await Book.find(filters).populate('seller', 'name');

    res.json(books);
  } catch (error) {
    res.status(400).json({ error: 'Error searching for books' });
  }
});

// Add
router.route('/').post((req, res) => {
    const { title, semester, subject, course, author, description, price, condition, seller } = req.body;
    
    const newBook = new Book({
      title,
      semester,
      subject,
      course,
      author,
      description,
      price,
      condition,
      seller
    });
  
    newBook.save()
      .then(() => res.json('Book added successfully'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
// update
router.route('/:id').put((req, res) => {
    Book.findById(req.params.id)
      .then(book => {
        book.title = req.body.title;
        book.semester = req.body.semester;
        book.subject = req.body.subject;
        book.course = req.body.course;
        book.author = req.body.author;
        book.description = req.body.description;
        book.price = req.body.price;
        book.condition = req.body.condition;
        book.seller = req.body.seller;
  
        book.save()
          .then(() => res.json('Book updated successfully'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
//   delete
router.route('/:id').delete((req, res) => {
    Book.findByIdAndDelete(req.params.id)
      .then(() => res.json('Book deleted successfully'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  

module.exports = router;