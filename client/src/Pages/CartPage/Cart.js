import React from 'react';
import './Cart.css';
import PageBreaker from '../../Components/PageBreaker/PageBreaker';
import { useState, useEffect } from 'react';
import Card from '../../Components/Card/Card';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();
  const [books, setBooks] = useState({});
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')));
  }, []);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        if (cart && cart.length > 0) {
          const bookPromises = cart.map((id) =>
            axios.get(`http://localhost:5000/books/${id}`)
          );
          const bookResponses = await Promise.all(bookPromises);
          const fetchedBooks = {};
          bookResponses.forEach((res) => {
            const book = res.data;
            fetchedBooks[book._id] = book;
          });
          setBooks(fetchedBooks);
        }
      } catch (error) {
        console.log('Error: ', error);
      }
    };

    fetchBooks();
  }, [cart]);

  return (
    <>
      <PageBreaker title={'cart'} />
      <div className="cartContainer">
        <div className="searchResultsContainer">
          {Object.values(books).length > 0 ? (
            Object.values(books).map((book, index) => (
              <Card
                key={index}
                image={`http://localhost:5000/books/cover/${book._id}`}
                title={book.title}
                price={book.price}
                coursecode={book.courseCode}
                semester={book.semester}
                course={book.course}
                _id={book._id}
                smallButton="Delete"
                handleSmallButton={() => {
                  navigate(`/buy/${book._id}`);
                }}
                largeButton="Update"
                // handleLargeButton={handleUpdate}
              />
            ))
          ) : (
            <h3>None</h3>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
