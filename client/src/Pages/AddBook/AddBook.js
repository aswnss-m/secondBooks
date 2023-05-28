import React, { useState } from 'react';
import axios from 'axios';
import "./AddBook.css";

function SellBook() {
  const [formData, setFormData] = useState({
    title: '',
    cover: null,
    semester: '',
    courseCode: '', // Updated field name
    course:"",
    author: '',
    description: '',
    price: '',
  });

  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    // Validate form data
    const { title, cover, semester, courseCode,course, author, description, price } = formData;
    if (!title || !cover || !semester || !courseCode || !course || !author || !description || !price) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      // Prepare form data to be sent
      const seller = JSON.parse(localStorage.getItem('user'));
      const form = new FormData();
      form.append('title', title);
      form.append('cover', cover);
      form.append('semester', semester);
      form.append('courseCode', courseCode);
      form.append('course',course);
      form.append('author', author);
      form.append('description', description);
      form.append('price', price);
      form.append('seller', seller.id);
      // Make a POST request to the backend
      const response = await axios.post('http://localhost:5000/books/add', form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Reset the form after successful submission
      setFormData({
        title: '',
        cover: null,
        semester: '',
        courseCode: '',
        course:'',
        author: '',
        description: '',
        price: '',
        seller: ''
      });

      // Show a success message or redirect to a different page
      
      
      axios.put('http://localhost:5000/users/addbook', { bookId: response.data.bookId, userId: seller.id }).then((res) => {
        window.location = '/profile';
      }).catch((err) => 
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    if (name === 'cover') {
      setFormData((prevData) => ({
        ...prevData,
        cover: files[0]
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  return (
    <div className='addBookContainer'>
      <form className='form' onSubmit={handleSubmit}>
        <span className='text-bold' style={{ textAlign: 'center' }}>Sell a Book</span>
        <div className="formGroup">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Book Title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="cover">Cover Image</label>
          <input
            type="file"
            name="cover"
            id="cover"
            accept=".jpg, .jpeg, .png, .webp"
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="semester">Semester</label>
          <input
            type="text"
            name="semester"
            id="semester"
            placeholder="Semester"
            value={formData.semester}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="courseCode">Course Code</label>
          <input
            type="text"
            name="courseCode"
            id="courseCode"
            placeholder="Course Code"
            value={formData.courseCode}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="courseCode">Branch</label>
          <input
            type="text"
            name="course"
            id="course"
            placeholder="Course Code"
            value={formData.course}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            id="author"
            placeholder="Author"
            value={formData.author}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            placeholder="Book Description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        {error && <p className="error">{error}</p>}

        <div className="formGroup formButtonGroup">
          <input type="submit" value="Sell" />
          <input type="reset" value="Clear" />
        </div>
      </form>
    </div>
  );
}

export default SellBook;
