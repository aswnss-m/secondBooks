import React, { useEffect,useState } from 'react'
import PageBreaker from "../../Components/PageBreaker/PageBreaker"
import "./Profile.css"
import {Link} from 'react-router-dom'
import Card from "../../Components/Card/Card" 
import axios from 'axios'
function Profile() {
  const [userName,setUserName]  = useState('');
  const [email,setEmail] = useState('');
  const [booksIds,setBooksIds] = useState([]);
  const [books,setBooks] = useState({});
  
  const handleDelete = () => {
    console.log("Delete Button Was Clicked")
  }
  const handleUpdate = ()=>{
    console.log("Update Clicked");
  }
  useEffect(() => {
    const details = JSON.parse(localStorage.getItem('user'));
    setUserName(details.name);
    setEmail(details.email);
    setBooksIds(details.books);
  }, []);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const bookPromises = booksIds.map(id =>
          axios.get(`http://localhost:5000/books/${id}`)
        );
        const bookResponses = await Promise.all(bookPromises);
        const fetchedBooks = {};
        bookResponses.forEach(res => {
          const book = res.data;
          fetchedBooks[book._id] = book;
        });
        setBooks(fetchedBooks);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchBooks();
  }, [booksIds]);
  
  return (
    <div className='profileContainer'>
      <div className="profileHeader">
        <div className="profilePicture">
            <img src="https://unsplash.it/100" alt="Profile" />
        </div>
        <div className="profileDetails">
            <p className='boldText'>{userName}</p>
            <p>{email}</p>
            <Link to={'/AddBook'}><button className='greenButton'>Sell Book</button></Link>
        </div>
      </div>
<PageBreaker title={'Books You are selling'}/>
<div className="profileCards">
  {Object.values(books).map((book, index) => (
    <Card
      key={index}
      image={`http://localhost:5000/books/cover/${book._id}`}
      title={book.title}
      price={book.price}
      coursecode={book.courseCode}
      semester={book.semester}
      course={book.course}
      _id={book._id}
      smallButton='Delete'
      smallButtonFunction={handleDelete}
      largeButton='Update'
      largeButtonFunction={handleUpdate}

    />
  ))}
</div>
    </div>
  )
}

export default Profile
