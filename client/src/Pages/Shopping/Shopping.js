import React, { useEffect, useState } from 'react';
import PageBreaker from '../../Components/PageBreaker/PageBreaker';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Shopping.css';

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
     <> <PageBreaker title={'Buy'} />
    <div className='shoppingContainer'>
      <div className="shopBook">
          <div className="shopBookCover">
            <img src={`http://localhost:5000/books/cover/${id}`} alt={book.title} />
          </div>
          <div className="shopBookDetails">
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p className='text-bold'>Price: {book.price}</p>
            <p>Description: {book.description}</p>
            <button className='buyButton' onClick={()=>{
              window.location.href=`/buy/${id}`;
            }}>Buy</button>
            <button className='cartButton'>Add to Cart</button>
      </div>
      </div>
    </div>
    </>
  );
}

export default Shopping;
