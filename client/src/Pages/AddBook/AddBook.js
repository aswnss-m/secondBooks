import React, { useState } from 'react';
import axios from 'axios';
import "./AddBook.css";

function SellBook() {
  const [formData, setFormData] = useState({
    title: '',
    cover: null,
    semester: '',
    subject: '',
    course: '',
    author: '',
    description: '',
    price: '',
  });

  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    // Validate form data
    const { title, cover, semester, subject, course, author, description, price } = formData;
    if (!title || !cover || !semester || !subject || !course || !author || !description || !price) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      // Prepare form data to be sent
      const form = new FormData();
      form.append('title', title);
      form.append('cover', cover);
      form.append('semester', semester);
      form.append('subject', subject);
      form.append('course', course);
      form.append('author', author);
      form.append('description', description);
      form.append('price', price);
      // Make a POST request to the backend
      const response = await axios.post('http://localhost:5000/add', form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Reset the form after successful submission
      setFormData({
        title: '',
        cover: null,
        semester: '',
        subject: '',
        course: '',
        author: '',
        description: '',
        price: '',
      });

      // Show a success message or redirect to a different page
      console.log(response.data);
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
            accept=".jpg, .jpeg, .png"
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
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="course">Course</label>
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
  <input type="submit" value="Sell" />
  <input type="reset" value="Clear" />
</div>
</form>
</div>
);
}

export default SellBook;
