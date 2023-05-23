const router = require('express').Router();
const Book = require('../models/Book.model');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });
const User = require('../models/User.model');

// Get All
router.route('/').get((req, res) => {
  Book.find()
    .populate('seller', 'name')
    .then(books => res.json(books))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Recent Books
router.route('/recent').get((req,res)=>{
  Book.find()
  .sort({createdAt:-1})
  .limit(5)
  .populate('seller','name')
  .then(books=>res.json(books))
  .catch(err=>res.status(400).json('Error: '+err));
})
// update book 
router.route('/update/:id').put(upload.single('cover'), async (req, res) => {
  const bookId = req.params.id;
  
  try {
    // Find the existing book by ID
    const existingBook = await Book.findById(bookId);
    if (!existingBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    
    // Update the book fields that are provided in the request body
    if (req.body.title) {
      existingBook.title = req.body.title;
    }
    if (req.file) {
      existingBook.cover = req.file.filename;
    }
    if (req.body.semester) {
      existingBook.semester = req.body.semester;
    }
    if (req.body.courseCode) {
      existingBook.courseCode = req.body.courseCode;
    }
    if (req.body.course) {
      existingBook.course = req.body.course;
    }
    if (req.body.author) {
      existingBook.author = req.body.author;
    }
    if (req.body.description) {
      existingBook.description = req.body.description;
    }
    if (req.body.price) {
      existingBook.price = req.body.price;
    }

    // Save the updated book
    const updatedBook = await existingBook.save();

    res.status(200).json({ message: 'Book updated successfully', book: updatedBook });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});
// Get specific
router.route('/:id').get((req, res) => {
  Book.findById(req.params.id)
    .populate('seller', 'name')
    .then(book => res.json(book))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Filtered search
router.post('/search', async (req, res) => {
  try {
    const filters = {};

    // Extract filter values from query parameters
    const { title, courseCode, semester, minPrice, maxPrice, course } = req.body;
    console.log(req.body);
    if (title) {
      filters.title = { $regex: title, $options: 'i' }; // Case-insensitive regex matching
    }
    if (courseCode) {
      filters.courseCode = courseCode;
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
router.route('/add').post(upload.single('cover'), (req, res) => {
  const { title, semester, courseCode, course, author, description, price, seller } = req.body;
  console.log(req.body);
  const newBook = new Book({  
    title,
    cover: {
      data: req.file.buffer,
      contentType: req.file.mimetype
    },
    semester,
    courseCode,
    course,
    author,
    description,
    price,
    seller
  });

  newBook.save()
    .then((book) => {
      console.log(book._id);
      res.json({ message: 'Book added successfully', bookId: book._id })})
    .catch((err) => res.status(400).json({ message: 'Error: ' + err }));
});
// Get Book Cover Image
router.get('/cover/:id', (req, res) => {
  const bookId = req.params.id;
  Book.findById(bookId)
    .then((book) => {
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }

      res.set('Content-Type', book.cover.contentType);
      res.send(book.cover.data);
    })
    .catch((err) => res.status(500).json({ message: 'Error: ' + err }));
});
// Get Book Details
router.route("/details/:id").get((req, res) => {
  Book.findById(req.params.id)
    .populate("seller", "name")
    .then((book) => res.json(book))
    .catch((err) => res.status(400).json("Error: " + err));
});
// Update Book
router.route('/:id').put(upload.single('cover'), (req, res) => {
  Book.findById(req.params.id)
    .then(book => {
      book.title = req.body.title;
      book.semester = req.body.semester;
      book.courseCode = req.body.courseCode;
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
router.route('/:id').delete(async (req, res) => {
  const bookId = req.params.id;

  try {
    // Delete the book from the Books collection
    await Book.findByIdAndDelete(bookId);

    // Remove the book from the users' book lists
    const users = await User.updateMany({}, { $pull: { books: bookId } });

    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    console.log('Error deleting book: ', error);
    res.status(500).json({ error: 'An error occurred while deleting the book' });
  }
});
module.exports = router;
