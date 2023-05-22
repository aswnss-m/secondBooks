import React, { useEffect, useState } from 'react';
import Hero from '../../Components/Hero/Hero';
import "./Home.css";
import PageBreaker from '../../Components/PageBreaker/PageBreaker';
import Card from '../../Components/Card/Card';
import About from '../../Components/About/About';
import axios from 'axios';

function Home() {
  const [recentBooks, setRecentBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/books/recent')
      .then(res => {
        const books = res.data;
        setRecentBooks(books);
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  });

  return (
    <div>
      <Hero />
      <PageBreaker title={'Recent Uploads'} />
      <div className="recentUploads">
        {recentBooks.map((book, index) => (
          <Card
          key={index}
          image={`http://localhost:5000/books/cover/${book._id}`}
          title={book.title}
          price={book.price}
          coursecode={book.courseCode}
          semester={book.semester}
          course={book.course}
          _id={book._id}
          />
        ))}
      </div>
      <PageBreaker title={'About'} />
      <About />
    </div>
  );
}

export default Home;
