import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./AddBook.css";
import { useParams } from 'react-router-dom';

function UpdateBook() {
  const { bookId } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    cover: null,
    semester: '',
    courseCode: '',
    course: '',
    author: '',
    description: '',
    price: '',
  });

  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch the existing book details
    axios.get(`http://localhost:5000/books/${bookId}`)
      .then(res => {
        const book = res.data;
        setFormData({
          title: book.title,
          cover: null,
          semester: book.semester,
          courseCode: book.courseCode,
          course: book.course,
          author: book.author,
          description: book.description,
          price: book.price,
        });
      })
      .catch(err => {
        setError('An error occurred. Please try again.');
        console.error(err);
      });
  }, [bookId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    // Validate form data
    const { title, cover, semester, courseCode, course, author, description, price } = formData;
    if (!title || !semester || !courseCode || !course || !author || !description || !price) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      // Prepare form data to be sent
      const form = new FormData();
      form.append('title', title);
      form.append('cover', cover);
      form.append('semester', semester);
      form.append('courseCode', courseCode);
      form.append('course', course);
      form.append('author', author);
      form.append('description', description);
      form.append('price', price);

      // Make a PUT request to update the book
      await axios.put(`http://localhost:5000/books/update/${bookId}`, form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Show a success message or redirect to a different page
      window.location = '/profile';
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
        <span className='text-bold' style={{ textAlign: 'center' }}>Update Book</span>
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
          <label htmlFor="course">Branch</label>
          <input
            type="text"
            name="course"
            id="course"
            placeholder="Course"
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
          <input type="submit" value="Update" />
          <input type="reset" value="Clear" />
        </div>
      </form>
    </div>
  );
}

export default UpdateBook;
