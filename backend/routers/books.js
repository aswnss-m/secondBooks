const router = require('express').Router();
const Book = require('../models/Book.model');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });

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

// Filtered search
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
      filters.subject = subject;
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
      filters.course = course;
    }

    const books = await Book.find(filters).populate('seller', 'name');

    res.json(books);
  } catch (error) {
    res.status(400).json({ error: 'Error searching for books' });
  }
});

// Add Book
router.route('/').post(upload.single('cover'), (req, res) => {
  const { title, semester, subject, course, author, description, price, condition, seller } = req.body;

  const newBook = new Book({
    title,
    cover: {
      data: req.file.buffer,
      contentType: req.file.mimetype
    },
    semester,
    subject,
    course,
    author,
    description,
    price,
    seller
  });

  newBook.save()
    .then(() => res.json('Book added successfully'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Update Book
router.route('/:id').put(upload.single('cover'), (req, res) => {
  Book.findById(req.params.id)
    .then(book => {
      book.title = req.body.title;
      book.semester = req.body.semester;
      book.subject = req.body.subject;
      book.course = req.body.course;
      book.author = req.body.author;
      book.description = req.body.description;
      book.price = req.body.price;
      book.seller = req.body.seller;

      if (req.file) {
        book.cover.data = req.file.buffer;
        book.cover.contentType = req.file.mimetype;
      }

      book.save()
        .then(() => res.json('Book updated successfully'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// Delete Book
router.route('/:id').delete((req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(() => res.json('Book deleted successfully'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
