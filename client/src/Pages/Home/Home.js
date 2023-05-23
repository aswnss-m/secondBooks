import React, { useEffect, useState } from 'react';
import Hero from '../../Components/Hero/Hero';
import "./Home.css";
import PageBreaker from '../../Components/PageBreaker/PageBreaker';
import Card from '../../Components/Card/Card';
import About from '../../Components/About/About';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [recentBooks, setRecentBooks] = useState([]);
  const navigate = useNavigate();
  
  const pushCartItem = (bookId) => {
    let details = null;
    if (localStorage.getItem('user')) {
      details = JSON.parse(localStorage.getItem('user'));
      axios.put("http://localhost:5000/users/Additem", { bookId: bookId, userId: details.id })
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.data.user));
      })
      .catch((err) => {
        console.log(err);
      });
      alert("Item added to cart")
    }
    else {
      return;
    }

  };
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
          handleSmallButton={() => {
            navigate(`/buy/${book._id}`);
          }}
          handleLargeButton={() => {
            pushCartItem(book._id)
          }}
          />
        ))}
      </div>
      <PageBreaker title={'About'} />
      <About />
    </div>
  );
}

export default Home;
