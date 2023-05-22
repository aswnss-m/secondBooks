import React, { useEffect, useState } from 'react';
import PageBreaker from '../../Components/PageBreaker/PageBreaker';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Shopping() {
  const [book, setBook] = useState(null);
  const {id}  = useParams();
  console.log(id);
  useEffect(() => {
    axios.get(`http://localhost:5000/books/details/${id}`)
      .then(res => {
        setBook(res.data);
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }, [id]);

  if (!book) {
    return null; // or show a loading indicator
  }

  return (
    <div className='shoppingContainer'>
      <PageBreaker title={'Buy'} />
      <div className="shopBookContainer">
        <img src={`http://localhost:5000/books/cover/${id}`} alt={book.title} />
      </div>
      <div className="shopBookDetails">
        <h2>{book.title}</h2>
        <p>Author: {book.author}</p>
        <p>Price: {book.price}</p>
        <p>Description: {book.description}</p>
        <button>Buy</button>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default Shopping;
